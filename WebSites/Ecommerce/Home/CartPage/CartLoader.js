import React, { useState } from 'react';
import CartPage from './CartPage';

const App = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Wireless Headphones',
            price: 99.99,
            quantity: 1,
            image: '/portfolio/ecommerce-headphone-1.jpg',
        },
        {
            id: 2,
            name: 'Smart Watch',
            price: 199.99,
            quantity: 2,
            image: '/portfolio/ecommerce-watch-1.jpg',
        },
        {
            id: 3,
            name: 'Bluetooth Speaker',
            price: 49.99,
            quantity: 1,
            image: '/portfolio/ecommerce-bluetooth-1.jpg',
        },
    ]);

    const handleUpdateQuantity = (id, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: quantity } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handleCheckout = () => {
        alert('Proceeding to checkout...');
        console.log('Cart Items:', cartItems);
    };

    return (
        <CartPage
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onCheckout={handleCheckout}
        />
    );
};

export default App;
