// CartPage.jsx
import React from 'react';
import styles from './CartPage.module.css';
import Image from 'next/image';

const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className={styles['cart-container']}>
      <h1 className={styles['cart-title']}>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className={styles['empty-cart']}>Your cart is currently empty.</p>
      ) : (
        <>
          <table className={styles['cart-table']}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className={styles['cart-item']}>
                  <td>
                    <div className={styles['product-details']}>
                      <Image
                        // src="/images/example.jpg" // Replace with your image path in the 'public' folder
                        // alt="Resized Image"
                        width={40} // Resizes width to 50px
                        height={40} // Resizes height to 50px
                        className={styles['product-image']}
                        src={item.image} alt={item.name}
                      />
                      {/* <img src={item.image} alt={item.name} className={styles['product-image']} /> */}
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className={styles['quantity-input']}
                      onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                    />
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className={styles['remove-btn']} onClick={() => onRemoveItem(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles['cart-summary']}>
            <h3>Total: ${calculateTotal()}</h3>
            <a href='/ecommerce/checkout'>  <button className={styles['checkout-btn']} onClick={onCheckout}>Proceed to Checkout</button></a>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
