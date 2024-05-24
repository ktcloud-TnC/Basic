// components/ProductList.js
import React, { useState, useEffect } from 'react';
import styles from '../styles/Layout.module.css';

function ProductList({ onSelectProduct }) {
    const defaultProducts = [
        { id: 'default1', name: '상품 1', category: '카테고리' },
        { id: 'default2', name: '상품 2', category: '카테고리' },
        // 여기에 더 많은 기본 상품들을 추가할 수 있습니다.
    ];
    
    const [products, setProducts] = useState(defaultProducts); // 초기값을 defaultProducts로 설정

    useEffect(() => {
        fetch('/api/products/list')
            .then(response => response.json())
            .then(data => {
                if(data && data.length > 0) {
                    setProducts(data); // 데이터 로드 성공 시, 상품 리스트 업데이트
                } else {
                    // 받아온 데이터가 비어있을 경우, 기본 상품 리스트 유지
                    throw new Error('No products found');
                }
            })
            .catch(error => {
                console.error("제품 목록을 불러오는 중 오류 발생:", error);
                // 여기서는 기본 상품 리스트가 이미 초기 상태로 설정되어 있으므로,
                // 추가적인 작업을 하지 않아도 됩니다. 필요에 따라 오류 처리를 더 추가할 수 있습니다.
            });
    }, []);

    return (
        <ul>
          {products.map(product => (
            <li key={product.id} onClick={() => onSelectProduct(product.id)}>
              <span className={styles.product_name}>{product.name}</span> /&nbsp;
              <span className={styles.category_name}>{product.category}</span>
            </li>
          ))}
        </ul>
      );
    }

export default ProductList;
