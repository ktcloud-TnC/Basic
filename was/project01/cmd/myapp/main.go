// project01\cmd\myapp\main.go
package main

import (
	"project01/api"
	"project01/config"
	customMiddleware "project01/middleware" // 사용자 정의 미들웨어에 대한 별칭 사용
	"time"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware" // echo의 내장 미들웨어를 직접 사용
)

func main() {
	e := echo.New()

	// 환경설정 로드
	if err := config.Load(); err != nil {
		e.Logger.Fatal("환경설정 로드 실패:", err)
	}

	// 한국 시간대(KST) 설정
	location, err := time.LoadLocation("Asia/Seoul")
	if err != nil {
		e.Logger.Fatal("시간대 설정 실패:", err)
	}

	// 커스텀 로깅 미들웨어 설정
	customMiddleware.CustomLoggerConfig(e, location)

	// 에코 내장 미들웨어 설정
	e.Use(middleware.Recover())
	e.Use(middleware.CORS())

	// 정적 파일 서비스 설정
	e.Static("/", "static")

	// API 라우트 설정
	api.SetupRoutes(e)

	// 서버 시작
	e.Logger.Fatal(e.Start(":8080"))
}
