import React from 'react';
import styles from './ProductListingPage.module.css';

const ProductListingPage = ({ products }) => {
  return (
    <div className={styles['product-listing-container']}>
      <h1 className={styles['page-title']}>Our Products</h1>
      <div className={styles['product-grid']}>
        {products.map((product) => (
          <div key={product.id} className={styles['product-card']}>
            <div className={styles['product-image']}>
              <img src={product.image} alt={product.name} className={styles['product-img']} />
            </div>
            <div className={styles['product-info']}>
              <h2 className={styles['product-name']}>{product.name}</h2>
              <p className={styles['product-price']}>${product.price}</p>
              <p className={styles['product-description']}>
                {product.description.length > 100
                  ? `${product.description.substring(0, 100)}...`
                  : product.description}
              </p>
              <button className={styles['view-details-btn']}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
