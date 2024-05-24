// project01\model\models.go
package model

// Product 모델 예시
type Product struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Category    string `json:"category"`
}

// ServerStatus 모델
type ServerStatus struct {
	Hostname    string  `json:"hostname"`
	CPUUsage    float64 `json:"cpuUsage"`
	MemoryUsage float64 `json:"memoryUsage"`
}
