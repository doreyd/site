import React from 'react';
import styles from './ProductDetailPage.module.css';

const ProductDetailPage = ({ product }) => {
  return (
    <div className={styles['product-detail-container']}>
      <div className={styles['product-detail-content']}>
        <div className={styles['product-image']}>
          <img src={product.image} alt={product.name} className={styles['product-img']} />
        </div>

        <div className={styles['product-info']}>
          <h1 className={styles['product-name']}>{product.name}</h1>
          <p className={styles['product-price']}>${product.price}</p>
          <p className={styles['product-availability']}>
            {product.isAvailable ? 'In Stock' : 'Out of Stock'}
          </p>

          <div className={styles['product-description']}>
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className={styles['add-to-cart']}>
            <a href='/ecommerce/cart'>
              <button
                className={`${styles['btn']} ${product.isAvailable ? styles['available'] : styles['unavailable']}`}
                disabled={!product.isAvailable}
              >
                {product.isAvailable ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className={styles['reviews-section']}>
        <h2>Customer Reviews</h2>
        {product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className={styles['review']}>
              <p className={styles['reviewer-name']}>{review.reviewer}</p>
              <p className={styles['review-rating']}>
                Rating: {review.rating} / 5
              </p>
              <p className={styles['review-comment']}>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to review this product!</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
