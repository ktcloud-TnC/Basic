// pages/api/ws.js

import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};

// 환경 변수에서 WAS 서버 IP 읽기
const target = `http://${process.env.WAS_SERVER_IP}`;

// 프록시 미들웨어 설정
const proxy = createProxyMiddleware({
    target: target,
    changeOrigin: true,
    ws: true, // 웹소켓 지원 활성화
    logLevel: 'debug', // 로깅 레벨 설정 (필요에 따라 조절)
    // 필요한 경우 여기에 추가 프록시 설정을 추가할 수 있습니다.
});

export default function handler(req, res) {
    // 프록시 요청 처리
    if (req.method === 'GET') {
        proxy(req, res, (result) => {
            if (result instanceof Error) {
                throw result;
            }
            throw new Error(`Request to ${req.url} was not proxied!`);
        });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
