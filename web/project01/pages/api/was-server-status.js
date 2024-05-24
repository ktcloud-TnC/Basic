// pages/api/was-server-status.js
export default async function handler(req, res) {
    const WAS_SERVER_URL = `http://${process.env.WAS_SERVER_IP || '172.25.1.177'}`;
    const wasServerStatusEndpoint = `${WAS_SERVER_URL}/api/was-server-status`;

    try {
        const response = await fetch(wasServerStatusEndpoint);
        if (!response.ok) throw new Error('WAS 서버 상태 조회 실패');
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}