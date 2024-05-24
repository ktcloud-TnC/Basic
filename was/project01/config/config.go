// project01\config\config.go
package config

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql" // Use _ to import solely for side effects

	"github.com/joho/godotenv"
)

var (
	dbServerIP string
	dbUser     string
	dbPassword string
	dbName     string
	dbPort     string
	LogDir     string // 로그 디렉토리 경로 전역 변수
)

// Load 함수는 .env 파일로부터 환경 변수를 로드합니다.
func Load() error {
	if err := godotenv.Load(); err != nil {
		log.Println("Warning: .env 파일을 찾을 수 없습니다")
		return err
	}

	dbServerIP = os.Getenv("DB_SERVER_IP")
	dbUser = os.Getenv("DB_USER")
	dbPassword = os.Getenv("DB_PASSWORD")
	dbName = os.Getenv("DB_NAME")
	dbPort = os.Getenv("DB_PORT")
	LogDir = os.Getenv("LOG_DIR")

	return nil
}

// ConnectDB 함수는 데이터베이스 연결을 설정합니다.
func ConnectDB() (*sql.DB, error) {
	connectionString := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8", dbUser, dbPassword, dbServerIP, dbPort, dbName)
	db, err := sql.Open("mysql", connectionString)
	if err != nil {
		return nil, fmt.Errorf("DB 연결 실패: %v", err)
	}
	if err = db.Ping(); err != nil {
		return nil, fmt.Errorf("DB 핑 실패: %v", err)
	}
	return db, nil
}
