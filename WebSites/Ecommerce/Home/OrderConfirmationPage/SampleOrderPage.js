import React from 'react';
import OrderConfirmationPage from './OrderConfirmationPage';

const SampleOrderPage = () => {
  // Sample order details
  const sampleOrderDetails = {
    id: '987654',
    date: '2024-12-26',
    total: 115.75,
    items: [
      { id: '1', name: 'Product A', quantity: 2, price: 30.00 },
      { id: '2', name: 'Product B', quantity: 1, price: 55.00 },
      { id: '3', name: 'Product C', quantity: 1, price: 20.75 },
    ],
    shipping: {
      name: 'Jane Doe',
      address: '5678 Maple Avenue',
      city: 'Toronto',
      zip: 'M5A 1A1',
    },
  };

  return (
    <div>
      <OrderConfirmationPage orderDetails={sampleOrderDetails} />
    </div>
  );
};

export default SampleOrderPage;
