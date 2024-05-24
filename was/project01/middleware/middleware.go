// project01\middleware\middleware.go
package middleware

import (
	"os"
	"project01/config"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func CustomLoggerConfig(e *echo.Echo, location *time.Location) {
	logDir := config.LogDir
	logFilePath := logDir + "/app.log"

	var logOutput *os.File

	// 로그 디렉토리 존재 여부 확인 및 로그 파일 열기
	if _, err := os.Stat(logDir); !os.IsNotExist(err) {
		var err error
		logOutput, err = os.OpenFile(logFilePath, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
		if err != nil {
			logOutput = os.Stderr // 파일 열기 실패 시 표준 오류로 리디렉션
			// 여기에 실패 로그 메시지를 기록할 수 있습니다.
		}
	} else {
		logOutput = os.Stderr // 로그 디렉토리가 없으면 표준 오류로 리디렉션
		// 여기에 실패 로그 메시지를 기록할 수 있습니다.
	}

	// 로거 미들웨어 설정
	e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
		Skipper: func(c echo.Context) bool {
			// '/api/was-server-status' 경로의 요청은 로그를 기록하지 않음
			if c.Path() == "/api/was-server-status" {
				return true
			}
			return false
		},
		Format: `${time_custom} | remote_ip:"${remote_ip}" | method:"${method}"` + "\n" +
			`| uri: "${uri}" | status: ${status} | referer: "${referer}" |` +
			` user_agent: "${user_agent}" | response_time: "${latency_human}" | bytes_in: ${bytes_in} | bytes_out: ${bytes_out}` + "\n",
		CustomTimeFormat: "2006-01-02 15:04:05",
		Output:           logOutput,
	}))

	// 시간대 설정 미들웨어 추가
	e.Use(func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			now := time.Now().In(location)
			c.Set("custom_time", now.Format("2006-01-02 15:04:05"))
			return next(c)
		}
	})
}
