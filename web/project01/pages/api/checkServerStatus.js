// pages/api/checkServerStatus.js
import { exec } from 'child_process';

export default function handler(req, res) {
  // 환경 변수를 통해 WAS 서버 IP 주소를 가져옵니다.
  const WAS_SERVER_IP = process.env.WAS_SERVER_IP ;
  const WAS_PRIVATE_IP = process.env.WAS_PRIVATE_IP || '172.25.1.177';
  const WAS_SERVER_URL = `http://${WAS_SERVER_IP}`;
  const ECHO_HEALTH_ENDPOINT = `${WAS_SERVER_URL}/healthCheck`;
  const DB_CHECK_ENDPOINT = `${WAS_SERVER_URL}/dbCheck`;

  exec(`ping -c 1 ${WAS_PRIVATE_IP}`, async (err) => {
    if (err) {
      // ping 실패 시
      return res.status(500).json({ message: 'WAS 서버에 문제가 발생했습니다.' });
    }

    try {
      // Echo 애플리케이션 실행 확인
      const echoResponse = await fetch(ECHO_HEALTH_ENDPOINT);
      if (!echoResponse.ok) {
        return res.status(500).json({ message: 'WAS 서버에 연결되었지만 Echo 애플리케이션이 비정상 작동중 입니다.' });
      }

      // DB 서버 연결 상태 확인
      const dbResponse = await fetch(DB_CHECK_ENDPOINT);
      if (!dbResponse.ok) {
        return res.status(500).json({ message: 'WAS 서버와 DB 서버 간의 연결에 문제가 있습니다.' });
      }

      // 모든 검사가 성공적으로 완료됐다면
      return res.status(200).json({ message: '애플리케이션이 정상적으로 실행 중입니다.' });
    } catch (error) {
      // fetch 중 에러 발생 시
      console.error(error);
      return res.status(500).json({ message: '서버 상태 확인 중 오류가 발생했습니다.' });
    }
  });
}
