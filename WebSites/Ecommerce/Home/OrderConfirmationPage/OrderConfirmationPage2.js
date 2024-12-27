// OrderConfirmationPage.jsx
import React from 'react';
import styles from './OrderConfirmationPage.module.css';

const OrderConfirmationPage = ({ orderDetails }) => {
  return (
    <div className={styles['confirmation-container']}>
      <h1 className={styles['confirmation-title']}>Order Confirmation</h1>
      <p className={styles['confirmation-message']}>Thank you for your order!</p>
      <div className={styles['order-details']}>
        <h2>Order Summary</h2>
        <div className={styles['order-info']}>
          <p><strong>Order ID:</strong> {orderDetails.id}</p>
          <p><strong>Date:</strong> {orderDetails.date}</p>
          <p><strong>Total:</strong> ${orderDetails.total.toFixed(2)}</p>
        </div>

        <h3>Items Ordered</h3>
        <ul className={styles['items-list']}>
          {orderDetails.items.map((item) => (
            <li key={item.id} className={styles['item']}>
              <div className={styles['item-details']}>
                <span>{item.name}</span>
                <span>Qty: {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </li>
          ))}
        </ul>

        <h3>Shipping Information</h3>
        <div className={styles['shipping-info']}>
          <p><strong>Name:</strong> {orderDetails.shipping.name}</p>
          <p><strong>Address:</strong> {orderDetails.shipping.address}</p>
          <p><strong>City:</strong> {orderDetails.shipping.city}</p>
          <p><strong>ZIP Code:</strong> {orderDetails.shipping.zip}</p>
        </div>
      </div>
      <button className={styles['back-btn']} onClick={() => window.location.href = '/'}>
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderConfirmationPage;