package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
)

var db *sql.DB

func initDB() {
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found, relying on system environment variables.")
	}
	dbUser := os.Getenv("DB_USER")
	dbPass := os.Getenv("DB_PASS")
	dbHost := os.Getenv("DB_HOST")
	dbName := os.Getenv("DB_NAME")
	if dbUser == "" || dbHost == "" || dbName == "" {
		log.Fatal("Critical database environment variables are missing.")
	}

	dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s", dbUser, dbPass, dbHost, dbName)

	db, err = sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal("Error opening database: ", err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatal("Error connecting to the MySQL database: ", err)
	}

	// Updated table schema with token_version
	createTableQuery := `
	CREATE TABLE IF NOT EXISTS users (
		id INT AUTO_INCREMENT PRIMARY KEY,
		email VARCHAR(255) UNIQUE NOT NULL,
		password VARCHAR(255) NOT NULL,
		token_version INT DEFAULT 1
	);`

	_, err = db.Exec(createTableQuery)
	if err != nil {
		log.Fatal("Failed to create table:", err)
	}

	fmt.Println("Successfully connected to MySQL and initialized schema!")
}
