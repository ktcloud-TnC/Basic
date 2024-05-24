// pages/api/start-stress-test.js
import { exec } from 'child_process';

export default function handler(req, res) {
    // 스트레스 테스트 명령 실행
    exec("stress-ng --cpu 1 --timeout 400", (error, stdout, stderr) => {
        if (error) {
            console.error('스트레스 테스트 실행 중 오류 발생:', error);
            // 오류가 발생한 경우, 단순히 상태 코드만 반환
            return res.status(500).send();
        }
        // 성공적으로 처리된 경우, 상태 코드 200으로 응답
        res.status(200).send();
    });
}
