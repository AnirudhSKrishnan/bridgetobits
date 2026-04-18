package main

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

var jwtKey = []byte(os.Getenv("JWT_SECRET"))

type User struct {
	ID           int    `json:"id"`
	Email        string `json:"email"`
	Password     string `json:"password"`
	TokenVersion int    `json:"token_version"`
}

type Credentials struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type Claims struct {
	Email   string `json:"email"`
	Version int    `json:"version"` // Track version inside the token
	jwt.RegisteredClaims
}

func SignupHandler(w http.ResponseWriter, r *http.Request) {
	var creds Credentials
	if err := json.NewDecoder(r.Body).Decode(&creds); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(creds.Password), bcrypt.DefaultCost)
	if err != nil {
		http.Error(w, "Server error", http.StatusInternalServerError)
		return
	}

	_, err = db.Exec("INSERT INTO users (email, password) VALUES (?, ?)", creds.Email, string(hashedPassword))
	if err != nil {
		http.Error(w, "Email already exists", http.StatusConflict)
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "User created successfully"})
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	var creds Credentials
	if err := json.NewDecoder(r.Body).Decode(&creds); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	var storedUser User
	err := db.QueryRow("SELECT id, email, password, token_version FROM users WHERE email = ?", creds.Email).Scan(
		&storedUser.ID, &storedUser.Email, &storedUser.Password, &storedUser.TokenVersion)

	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "Invalid credentials", http.StatusUnauthorized)
			return
		}
		http.Error(w, "Server error", http.StatusInternalServerError)
		return
	}

	if err = bcrypt.CompareHashAndPassword([]byte(storedUser.Password), []byte(creds.Password)); err != nil {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		return
	}

	expirationTime := time.Now().Add(24 * time.Hour)
	claims := &Claims{
		Email:   creds.Email,
		Version: storedUser.TokenVersion, // Embed current version in JWT
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(expirationTime),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		http.Error(w, "Server error", http.StatusInternalServerError)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:     "auth_token",
		Value:    tokenString,
		Expires:  expirationTime,
		HttpOnly: true,
		Secure:   true, // Production requirement for HTTPS
		Path:     "/",
		SameSite: http.SameSiteLaxMode,
	})

	json.NewEncoder(w).Encode(map[string]string{"message": "Login successful"})
}

func LogoutHandler(w http.ResponseWriter, r *http.Request) {
	// 1. Increment version in DB to invalidate existing tokens on the server
	cookie, err := r.Cookie("auth_token")
	if err == nil {
		claims := &Claims{}
		token, _ := jwt.ParseWithClaims(cookie.Value, claims, func(t *jwt.Token) (interface{}, error) {
			return jwtKey, nil
		})

		if token != nil && token.Valid {
			db.Exec("UPDATE users SET token_version = token_version + 1 WHERE email = ?", claims.Email)
		}
	}

	// 2. Instruct the browser to delete the cookie
	http.SetCookie(w, &http.Cookie{
		Name:     "auth_token",
		Value:    "",
		Expires:  time.Unix(0, 0),
		MaxAge:   -1,
		HttpOnly: true,
		Secure:   true,
		Path:     "/",
		SameSite: http.SameSiteLaxMode,
	})

	json.NewEncoder(w).Encode(map[string]string{"message": "Logged out and session invalidated"})
}

// ValidateHandler checks if the token in the request is both valid and current
func ValidateHandler(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("auth_token")
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	claims := &Claims{}
	token, err := jwt.ParseWithClaims(cookie.Value, claims, func(t *jwt.Token) (interface{}, error) {
		return jwtKey, nil
	})

	if err != nil || !token.Valid {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	// Verify the version in the JWT matches the current version in the DB
	var currentVersion int
	err = db.QueryRow("SELECT token_version FROM users WHERE email = ?", claims.Email).Scan(&currentVersion)
	if err != nil || claims.Version != currentVersion {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	w.WriteHeader(http.StatusOK)
}
