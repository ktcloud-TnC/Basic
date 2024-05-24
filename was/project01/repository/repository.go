// project01\repository\repository.go
package repository

import (
	"database/sql"
	"project01/model" // model 패키지를 임포트해야 합니다.
)

// GetProductList 함수는 데이터베이스에서 상품 목록을 조회합니다.
func GetProductList(db *sql.DB) ([]model.Product, error) {
	rows, err := db.Query("SELECT id, name, description, category FROM products")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var products []model.Product
	for rows.Next() {
		var p model.Product
		err := rows.Scan(&p.ID, &p.Name, &p.Description, &p.Category)
		if err != nil {
			return nil, err
		}
		products = append(products, p)
	}

	return products, nil
}

// GetProductDescription 함수는 특정 상품의 설명을 조회합니다.
func GetProductDescription(db *sql.DB, productID int) (model.Product, error) {
	var p model.Product
	err := db.QueryRow("SELECT id, name, description, category FROM products WHERE id = ?", productID).Scan(&p.ID, &p.Name, &p.Description, &p.Category)
	if err != nil {
		return p, err
	}

	return p, nil
}

// AddProduct 함수는 새로운 상품을 데이터베이스에 추가합니다.
func AddProduct(db *sql.DB, p model.Product) error {
	_, err := db.Exec("INSERT INTO products (name, description, category) VALUES (?, ?, ?)", p.Name, p.Description, p.Category)
	if err != nil {
		return err
	}

	return nil
}
