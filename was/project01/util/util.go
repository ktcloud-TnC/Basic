package util

import (
	"time"
)

// TimeFormat 함수는 시간을 "2006-01-02 15:04:05" 포맷으로 변환합니다.
func TimeFormat(t time.Time) string {
	return t.Format("2006-01-02 15:04:05")
}
