// pages/api/hostname.js
import os from 'os';

export default function handler(req, res) {
  // os 모듈의 hostname 함수를 사용하여 시스템의 호스트 이름을 가져옵니다.
  const hostname = os.hostname();

  // 응답 객체의 status 메서드를 사용하여 HTTP 상태 코드를 설정합니다 (여기서는 200을 사용하여 요청이 성공적이었음을 나타냅니다).
  // json 메서드를 사용하여 클라이언트에 JSON 형식의 응답을 보냅니다.
  res.status(200).json({ hostname });
}
