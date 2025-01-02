import React, { useState } from 'react';
import styles from './Menu.module.css';
import Cart from './SVG/Cart'
import Deals from './SVG/Deals'
import Home from './SVG/Home'
import Contact from './SVG/Contact'
import Logo from './SVG/Logo'
import Link from 'next/link';
// import logo from './portfolio/ecommerce-logo.png'; // Import your logo image

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header} style={{ background: '#232f3e', color: 'white' }}>
            <div className={styles.logoContainer}>
                <Logo />
                {/* <img src='/portfolio/ecommerce-logo-2.png' alt="Ecommerce Logo" className={styles.logo} /> */}
                <span className={styles.siteName}>Shop Now</span>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.buttons}>
                    <a href='/ecommerce/'> <Home /></a>
                    <a href='/ecommerce/deals'>   <Deals /></a>
                    <a href='/ecommerce/home'>  <Contact /></a>
                    <a href='/ecommerce/cart'>  <Cart /></a>
                </div>
            </div>
        </header>
    );
};

export default Menu;