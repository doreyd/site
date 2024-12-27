// CheckoutPage.jsx
import React, { useState } from 'react';
import styles from './CheckoutPage.module.css';
import { useRouter } from 'next/router'

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        cardNumber: '',
        expiration: '',
        cvv: '',
    });

    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Payment Successful!');
        router.push({
            pathname: '/ecommerce/orderconfirmation',
        })
        // redirect('/ecommerce/orderconfirmation');
        // console.log('Order Details:', formData);
    };

    return (
        <div className={styles['checkout-container']}>
            <h1 className={styles['checkout-title']}>Checkout</h1>
            <form className={styles['checkout-form']} onSubmit={handleSubmit}>
                <div className={styles['form-columns']}>
                    <div className={styles['form-column']}>
                        <h2>Billing Details</h2>
                        <div className={styles['form-group']}>
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles['form-group']}>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles['form-group']}>
                            <label>Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles['form-row']}>
                            <div className={styles['form-group']}>
                                <label>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles['form-group']}>
                                <label>ZIP Code</label>
                                <input
                                    type="text"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles['form-column']}>
                        <h2>Payment Details</h2>
                        <div className={styles['form-group']}>
                            <label>Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles['form-row']}>
                            <div className={styles['form-group']}>
                                <label>Expiration Date</label>
                                <input
                                    type="text"
                                    name="expiration"
                                    placeholder="MM/YY"
                                    value={formData.expiration}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles['form-group']}>
                                <label>CVV</label>
                                <input
                                    type="text"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        {/* <a href='/ecommerce/orderconfirmation'> */}
                        <button type="submit" className={styles['submit-btn']}>
                            Place Order
                        </button>
                        {/* </a> */}
                    </div>
                </div>
                {/* <button type="submit" className={styles['submit-btn']}>
          Place Order
        </button> */}
            </form>
        </div>
    );
};

export default CheckoutPage;