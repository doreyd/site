// HomePage.jsx
import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Discover Amazing Products</h1>
          <p>Shop the latest trends and exclusive deals on your favorite items.</p>
          <a href='/ecommerce/deals'>  <button className={styles.shopNowBtn}>Shop Now</button></a>
        </div>
      </section>

      {/* Featured Categories */}
      <section className={styles.categoriesSection}>
        <h2>Featured Categories</h2>
        <div className={styles.categoriesGrid}>
          <div className={styles.categoryCard}>
            <a href='/ecommerce/deals'>     <img src="/portfolio/ecommerce-electronics.jpg" alt="Category 1" className={styles.img} /></a>
            <h3>Electronics</h3>
          </div>
          <div className={styles.categoryCard}>
            <a href='/ecommerce/deals'>   <img src="/portfolio/ecommerce-fashion.jpg" alt="Category 2" className={styles.img} /></a>
            <h3>Fashion</h3>
          </div>
          <div className={styles.categoryCard}>
            <a href='/ecommerce/deals'>   <img src="/portfolio/ecommerce-home.jpg" alt="Category 3" className={styles.img} /></a>
            <h3>Home & Kitchen</h3>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className={styles.productsSection}>
        <h2>Popular Products</h2>
        <div className={styles.productsGrid}>
          <div className={styles.productCard}>
          <a href='/ecommerce/product'>  <img src="/portfolio/ecommerce-headphone-3.jpg" alt="Product 1" className={styles.img} /></a>
            <h3>Wireless Headphones</h3>
            <p>$79.99</p>
            <a href='/ecommerce/cart'>   <button>Add to Cart</button></a>
          </div>
          <div className={styles.productCard}>
          <a href='/ecommerce/product'>   <img src="/portfolio/ecommerce-watch-3.jpg" alt="Product 2" className={styles.img} /> </a>
            <h3>Smartwatch 2.0</h3>
            <p>$199.99</p>
            <a href='/ecommerce/cart'>   <button>Add to Cart</button></a>
          </div>
          <div className={styles.productCard}>
          <a href='/ecommerce/product'>  <img src="/portfolio/ecommerce-laptop-1.jpg" alt="Product 3" className={styles.img} /></a>
            <h3>Gaming Laptop</h3>
            <p>$1499.99</p>
            <a href='/ecommerce/cart'>   <button>Add to Cart</button> </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest updates and offers.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </section>
    </div>
  );
};

export default HomePage;
