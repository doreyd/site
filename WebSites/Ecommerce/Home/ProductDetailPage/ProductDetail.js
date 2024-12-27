import React from 'react';
import ProductDetailPage from './ProductDetailPage';

const SampleProductPage = () => {
  // Sample product details
  const sampleProduct = {
    name: 'Wireless Bluetooth Headphones',
    image: '/portfolio/ecommerce-headphone-1.jpg',
    price: 79.99,
    isAvailable: true,
    description: 'Experience high-quality sound with these wireless Bluetooth headphones. Perfect for travel, work, or relaxation.',
    reviews: [
      {
        reviewer: 'John Doe',
        rating: 5,
        comment: 'Amazing sound quality, very comfortable!',
      },
      {
        reviewer: 'Jane Smith',
        rating: 4,
        comment: 'Good value for the price, but could use better noise cancellation.',
      },
    ],
  };

  return (
    <div>
      <ProductDetailPage product={sampleProduct} />
    </div>
  );
};

export default SampleProductPage;
