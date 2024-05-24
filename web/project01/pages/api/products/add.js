// pages/api/products/add.js
export default async function handler(req, res) {
    const WAS_SERVER_URL = `http://${process.env.WAS_SERVER_IP || '172.25.1.177'}`;
    const productListEndpoint = `${WAS_SERVER_URL}/api/products/add`;

    if (req.method === 'POST') {
        try {
            // 클라이언트로부터 받은 요청 본문을 WAS 서버에 전달합니다.
            const response = await fetch(productListEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(req.body),
            });

            // WAS 서버로부터의 응답을 확인합니다.
            if (response.ok) {
                const data = await response.json();
                // 성공적으로 상품을 추가했다면 클라이언트에 성공 메시지를 보냅니다.
                res.status(200).json({ message: 'Product added successfully', data });
            } else {
                // WAS 서버로부터 에러 응답이 왔다면, 에러 메시지를 클라이언트에 전달합니다.
                throw new Error('Failed to add product on the server');
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        }
    } else {
        // POST 메소드가 아닌 경우 에러를 반환합니다.
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}