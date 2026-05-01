package main

import (
	"fmt"
	"log"
	"net/http"
)

func enableCORS(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "https://bridgetobits.co.in")
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization, Cookie")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		next.ServeHTTP(w, r)
	}
}

func main() {
	initDB()
	defer db.Close()

	http.HandleFunc("/signup", enableCORS(SignupHandler))
	http.HandleFunc("/login", enableCORS(LoginHandler))
	http.HandleFunc("/logout", enableCORS(LogoutHandler))
	http.HandleFunc("/validate", enableCORS(ValidateHandler))

	fmt.Println("Server running on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
