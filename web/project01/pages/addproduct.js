// pages\addproduct.js
import Head from 'next/head';
import React from 'react';
import styles from '../styles/AddProduct.module.css';

export default function AddProduct() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
    
        try {
            const response = await fetch('/api/products/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                alert('상품이 성공적으로 추가되었습니다!');
                form.reset();
                window.opener.location.reload(); // 메인 페이지를 새로 고침
                window.close(); // 현재 창을 닫음
            } else {
                throw new Error('상품 추가에 실패했습니다');
            }
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    return (
        <div className={styles.body}> {/* styles 객체를 통한 클래스 참조 */}
            <Head>
                <title>Add Product</title>
            </Head>
            <div className={styles.card}>
                <h2 className={styles.add_product}>Add Product</h2>
                <form onSubmit={handleSubmit} className={styles.addProductForm}>
                    <div className={styles.inputBox}>
                        <input id="name" name="name" type="text" required />
                        <span>Product Name</span>
                    </div>
                    <div className={styles.inputBox}>
                        <input id="category" name="category" type="text" required />
                        <span>Category</span>
                    </div>
                    <div className={styles.inputBox}>
                        <textarea id="description" name="description" required></textarea>
                        <span>Description</span>
                    </div>
                    <button type="submit" className={styles.enter}>Add Product</button>
                </form>
            </div>
        </div>
    );
}