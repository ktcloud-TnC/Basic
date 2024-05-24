// project01\api\routes.go
package api

import (
	"github.com/labstack/echo/v4"
)

func SetupRoutes(e *echo.Echo) {
	e.GET("/dbCheck", dbCheck) // 중복된 항목을 dbCheck 함수로 변경
	e.GET("/api/products/list", getProductList)
	e.GET("/api/products/description/:id", getProductDescription)
	e.POST("/api/products/add", addProduct)
	e.GET("/api/was-server-status", getServerStatus)
	e.GET("/api/ws", handleWebSocket)
	e.GET("/healthCheck", healthCheck)
}
