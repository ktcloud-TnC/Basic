// components/ProductDescription.js
import React, { useState, useEffect } from 'react';

function ProductDescription({ productId }) {
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (!productId) return;
        fetch(`/api/products/description/${productId}`)
            .then(response => response.json())
            .then(data => setDescription(data.description))
            .catch(error => console.error("제품 설명을 불러오는 중 오류 발생:", error));
    }, [productId]);

    return (
        <div>
            {description}
        </div>
    );
}

export default ProductDescription;
