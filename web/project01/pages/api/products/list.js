// pages/api/products/list.js
export default async function handler(req, res) {
  const WAS_SERVER_URL = `http://${process.env.WAS_SERVER_IP || '172.25.1.177'}`;
    const productListEndpoint = `${WAS_SERVER_URL}/api/products/list`;
  
    try {
      const response = await fetch(productListEndpoint);
      if (!response.ok) {
        throw new Error('Echo 서버로부터 제품 목록을 불러오는데 실패했습니다.');
      }
      const products = await response.json();
      res.status(200).json(products);
    } catch (error) {
      console.error('제품 목록 조회 중 오류:', error);
      res.status(500).json({ message: '제품 목록을 조회하는 데 실패했습니다.' });
    }
  }
  