package main

import (
	"fmt"
	"log"
	"net/http"
)

func enableCORS(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Production domain configuration
		w.Header().Set("Access-Control-Allow-Origin", "https://b2b.ugbhartariya.com")
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, Authorization, Cookie")

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

	// Auth routes
	http.HandleFunc("/signup", enableCORS(SignupHandler))
	http.HandleFunc("/login", enableCORS(LoginHandler))
	http.HandleFunc("/logout", enableCORS(LogoutHandler))
	http.HandleFunc("/validate", enableCORS(ValidateHandler)) // New validation endpoint

	port := ":8080"
	fmt.Printf("Go Auth Server running on http://localhost%s\n", port)
	log.Fatal(http.ListenAndServe(port, nil))
}
