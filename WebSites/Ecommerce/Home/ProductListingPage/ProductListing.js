import React from 'react';
import ProductListingPage from './ProductListingPage';

const SampleProductListingPage = () => {
  // Sample product details
  const sampleProducts = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      image: '/portfolio/ecommerce-bluetooth-1.jpg',
      price: 79.99,
      description: 'Experience high-quality sound with these wireless Bluetooth headphones. Perfect for travel, work, or relaxation.',
    },
    {
      id: 2,
      name: 'Smartphone X Pro',
      image: '/portfolio/ecommerce-smartphone-1.jpg',
      price: 999.99,
      description: 'The latest smartphone with an edge-to-edge display, powerful camera, and lightning-fast processor.',
    },
    {
      id: 3,
      name: '4K Ultra HD TV',
      image: '/portfolio/ecommerce-smarttv-1.jpg',
      price: 599.99,
      description: 'Enjoy movies and games in stunning 4K clarity with this ultra-high-definition television.',
    },
    {
      id: 4,
      name: 'Gaming Laptop 15"',
      image: '/portfolio/ecommerce-laptop-1.jpg',
      price: 1499.99,
      description: 'High-performance gaming laptop with a 15" screen, powerful graphics, and fast processing.',
    },
    {
      id: 5,
      name: 'Smartwatch 2.0',
      image: '/portfolio/ecommerce-watch-2.jpg',
      price: 199.99,
      description: 'Track your fitness and receive notifications with this sleek and stylish smartwatch.',
    },
  ];

  return (
    <div>
      <ProductListingPage products={sampleProducts} />
    </div>
  );
};

export default SampleProductListingPage;
