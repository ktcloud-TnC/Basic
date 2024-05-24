// pages/api/products/description/[productId].js
export default async function handler(req, res) {
    const { productId } = req.query;
    const WAS_SERVER_URL = `http://${process.env.WAS_SERVER_IP || '172.25.1.177'}`;
    const productDescriptionEndpoint = `${WAS_SERVER_URL}/api/products/description/${productId}`;
  
    try {
      const response = await fetch(productDescriptionEndpoint);
      if (!response.ok) {
        throw new Error('Echo 서버로부터 제품 설명을 불러오는데 실패했습니다.');
      }
      const description = await response.json();
      res.status(200).json(description);
    } catch (error) {
      console.error('제품 설명 조회 중 오류:', error);
      res.status(500).json({ message: '제품 설명을 조회하는 데 실패했습니다.' });
    }
  }
  