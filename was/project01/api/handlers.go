// project01\api\handlers.go
package api

import (
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"project01/config"
	"project01/model"
	"project01/repository"
	"strconv"
	"time"

	"github.com/gorilla/websocket"
	"github.com/labstack/echo/v4"
	"github.com/shirou/gopsutil/cpu"
	"github.com/shirou/gopsutil/mem"
)

// upgrader는 WebSocket 연결을 위한 설정을 관리합니다.
var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		// 모든 출처를 허용하도록 설정합니다.
		return true
	},
}

// WebSocket 핸들러 함수
func handleWebSocket(c echo.Context) error {
	ws, err := upgrader.Upgrade(c.Response(), c.Request(), nil)
	if err != nil {
		log.Printf("WebSocket upgrade error: %v", err)
		return err
	}
	defer ws.Close()

	logFilePath := config.LogDir + "/app.log" // 로그 파일 경로 설정
	logCheckInterval := time.Second * 60      // 60초마다 로그 파일 존재 여부 확인

	for {
		_, err := os.Stat(logFilePath)
		if os.IsNotExist(err) {
			log.Printf("로그 파일이 존재하지 않습니다. %v초 후에 다시 확인합니다.", logCheckInterval/time.Second)
			time.Sleep(logCheckInterval)
			continue
		} else if err != nil {
			log.Printf("로그 파일 확인 중 오류 발생: %v", err)
			break
		}

		// 로그 파일 읽기
		data, err := ioutil.ReadFile(logFilePath)
		if err != nil {
			log.Printf("Error reading log file: %v", err)
			break
		}

		// WebSocket으로 메시지 전송
		if err := ws.WriteMessage(websocket.TextMessage, data); err != nil {
			log.Printf("WebSocket message send error: %v", err)
			break
		}

		time.Sleep(time.Second * 1) // 1초 대기, 실제 로그 전송 간격 조정이 필요할 수 있음
	}

	return nil
}

// 서버 상태 확인 핸들러 함수
func getServerStatus(c echo.Context) error {
	// CPU 사용량 및 메모리 상태 조회
	cpuUsage, err := cpu.Percent(time.Second, false)
	if err != nil {
		log.Printf("CPU 사용량 조회 실패: %v", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Cannot get CPU usage"})
	}

	memStat, err := mem.VirtualMemory()
	if err != nil {
		log.Printf("메모리 상태 조회 실패: %v", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Cannot get memory usage"})
	}

	hostname, err := os.Hostname()
	if err != nil {
		log.Printf("호스트 이름 조회 실패: %v", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Cannot get hostname"})
	}

	// 서버 상태 구조체 생성
	status := model.ServerStatus{
		Hostname:    hostname,
		CPUUsage:    cpuUsage[0],
		MemoryUsage: memStat.UsedPercent,
	}

	return c.JSON(http.StatusOK, status)
}

// DB 연결 확인 핸들러 함수
func dbCheck(c echo.Context) error {
	// DB 연결
	db, err := config.ConnectDB()
	if err != nil {
		log.Println("DB connection error:", err)
		return c.String(http.StatusInternalServerError, "DB connection error")
	}
	defer db.Close()

	return c.String(http.StatusOK, "DB is connected")
}

// 서버 상태 확인 핸들러 함수
func healthCheck(c echo.Context) error {
	return c.String(http.StatusOK, "Echo application is running")
}

// 상품 목록 조회 핸들러 함수
func getProductList(c echo.Context) error {
	// DB 연결
	db, err := config.ConnectDB()
	if err != nil {
		log.Println("DB connection error:", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "DB connection error"})
	}
	defer db.Close()

	// 상품 목록 조회
	products, err := repository.GetProductList(db)
	if err != nil {
		log.Println("Error getting product list:", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Error getting product list"})
	}

	return c.JSON(http.StatusOK, products)
}

// 상품 설명 조회 핸들러 함수
func getProductDescription(c echo.Context) error {
	// 상품 ID 파싱
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid product ID"})
	}

	// DB 연결
	db, err := config.ConnectDB()
	if err != nil {
		log.Println("DB connection error:", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "DB connection error"})
	}
	defer db.Close()

	// 상품 설명 조회
	product, err := repository.GetProductDescription(db, id)
	if err != nil {
		log.Println("Error getting product description:", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Error getting product description"})
	}

	return c.JSON(http.StatusOK, product)
}

// 상품 추가 핸들러 함수
func addProduct(c echo.Context) error {
	// 요청 바인딩
	var product model.Product
	if err := c.Bind(&product); err != nil {
		return err
	}

	// DB 연결
	db, err := config.ConnectDB()
	if err != nil {
		log.Println("DB connection error:", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "DB connection error"})
	}
	defer db.Close()

	// 상품 추가
	err = repository.AddProduct(db, product)
	if err != nil {
		log.Println("Error adding product:", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Error adding product"})
	}

	return c.JSON(http.StatusCreated, product)
}
