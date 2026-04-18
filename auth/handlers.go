package main

import (
	"crypto/rand"
	"encoding/hex"
	"encoding/json"
	"net/http"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

var jwtKey = []byte(os.Getenv("JWT_SECRET"))

type Claims struct {
	Email     string `json:"email"`
	SessionID string `json:"session_id"` // This must match the DB
	jwt.RegisteredClaims
}

// Helper to generate a random session string
func generateRandomString(n int) string {
	b := make([]byte, n)
	rand.Read(b)
	return hex.EncodeToString(b)
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	var creds Credentials
	json.NewDecoder(r.Body).Decode(&creds)

	var storedPassword string
	err := db.QueryRow("SELECT password FROM users WHERE email = ?", creds.Email).Scan(&storedPassword)
	if err != nil || bcrypt.CompareHashAndPassword([]byte(storedPassword), []byte(creds.Password)) != nil {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	// 1. Generate a brand new Session ID for this login
	newSessionID := generateRandomString(16)

	// 2. Store it on the SERVER (Database)
	_, err = db.Exec("UPDATE users SET current_session_id = ? WHERE email = ?", newSessionID, creds.Email)
	if err != nil {
		http.Error(w, "Server error", http.StatusInternalServerError)
		return
	}

	// 3. Put it in the JWT for the CLIENT
	expirationTime := time.Now().Add(24 * time.Hour)
	claims := &Claims{
		Email:            creds.Email,
		SessionID:        newSessionID,
		RegisteredClaims: jwt.RegisteredClaims{ExpiresAt: jwt.NewNumericDate(expirationTime)},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, _ := token.SignedString(jwtKey)

	http.SetCookie(w, &http.Cookie{
		Name: "auth_token", Value: tokenString, Expires: expirationTime,
		HttpOnly: true, Secure: true, Path: "/", SameSite: http.SameSiteLaxMode,
	})

	json.NewEncoder(w).Encode(map[string]string{"message": "Login successful"})
}

func LogoutHandler(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("auth_token")
	if err == nil {
		claims := &Claims{}
		jwt.ParseWithClaims(cookie.Value, claims, func(t *jwt.Token) (interface{}, error) { return jwtKey, nil })

		// 4. LOGOUT: Change the JWT on the SERVER (make it a new random string)
		// Now the client's JWT session_id will NEVER match the server's version.
		newDeadID := generateRandomString(16)
		db.Exec("UPDATE users SET current_session_id = ? WHERE email = ?", newDeadID, claims.Email)
	}

	// Clear the client cookie just to be clean
	http.SetCookie(w, &http.Cookie{
		Name: "auth_token", Value: "", MaxAge: -1, HttpOnly: true, Secure: true, Path: "/",
	})
	json.NewEncoder(w).Encode(map[string]string{"message": "Logged out successfully"})
}

func ValidateHandler(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("auth_token")
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	claims := &Claims{}
	token, err := jwt.ParseWithClaims(cookie.Value, claims, func(t *jwt.Token) (interface{}, error) { return jwtKey, nil })
	if err != nil || !token.Valid {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	// 5. THE MATCH CHECK: Do the two JWT values match?
	var serverSessionID string
	err = db.QueryRow("SELECT current_session_id FROM users WHERE email = ?", claims.Email).Scan(&serverSessionID)

	if err != nil || claims.SessionID != serverSessionID {
		// If they don't match, the client is using an "old" JWT from before logout
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	w.WriteHeader(http.StatusOK)
}
