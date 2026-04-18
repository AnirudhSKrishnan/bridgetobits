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

// --- Structs ---

type Credentials struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type Claims struct {
	Email     string `json:"email"`
	SessionID string `json:"session_id"`
	jwt.RegisteredClaims
}

// --- Helpers ---

func generateRandomString(n int) string {
	b := make([]byte, n)
	rand.Read(b)
	return hex.EncodeToString(b)
}

// --- Handlers ---

func SignupHandler(w http.ResponseWriter, r *http.Request) {
	var creds Credentials
	if err := json.NewDecoder(r.Body).Decode(&creds); err != nil {
		http.Error(w, "Invalid request", http.StatusBadRequest)
		return
	}

	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(creds.Password), bcrypt.DefaultCost)

	_, err := db.Exec("INSERT INTO users (email, password) VALUES (?, ?)", creds.Email, string(hashedPassword))
	if err != nil {
		http.Error(w, "User already exists", http.StatusConflict)
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "User created"})
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	var creds Credentials
	if err := json.NewDecoder(r.Body).Decode(&creds); err != nil {
		http.Error(w, "Invalid request", http.StatusBadRequest)
		return
	}

	var storedPassword string
	err := db.QueryRow("SELECT password FROM users WHERE email = ?", creds.Email).Scan(&storedPassword)
	if err != nil || bcrypt.CompareHashAndPassword([]byte(storedPassword), []byte(creds.Password)) != nil {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	newSessionID := generateRandomString(16)
	_, err = db.Exec("UPDATE users SET current_session_id = ? WHERE email = ?", newSessionID, creds.Email)
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}

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

		// Invalidate on Server
		newDeadID := generateRandomString(16)
		db.Exec("UPDATE users SET current_session_id = ? WHERE email = ?", newDeadID, claims.Email)
	}

	http.SetCookie(w, &http.Cookie{
		Name: "auth_token", Value: "", MaxAge: -1, HttpOnly: true, Secure: true, Path: "/",
	})
	json.NewEncoder(w).Encode(map[string]string{"message": "Logged out"})
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

	var serverSessionID string
	err = db.QueryRow("SELECT current_session_id FROM users WHERE email = ?", claims.Email).Scan(&serverSessionID)
	if err != nil || claims.SessionID != serverSessionID {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	w.WriteHeader(http.StatusOK)
}
