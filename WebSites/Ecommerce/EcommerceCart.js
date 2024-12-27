import React from "react";
import styles from "./Ecommerce.module.css";

// import Menu from './Menu/Menu'
import Menu from './Home/Menu/Menu'
import Home from './Home/Home'
import CartLoader from './Home/CartPage/CartLoader'
import CheckoutPage from './Home/CheckoutPage/CheckoutPage'
import SampleOrderPage from './Home/OrderConfirmationPage/SampleOrderPage'
import ProductDetail from './Home/ProductDetailPage/ProductDetail'
import ProductListing from './Home/ProductListingPage/ProductListing'
import HomePage from './Home/HomePage/HomePage'
import Footer from './Footer/Footer'

export default function Main() {
  return (
    <div className={styles.main}>
      <Menu />
      {/* <Home /> */}
      <CartLoader />
      {/* <CheckoutPage /> */}
      {/* <SampleOrderPage /> */}
      {/* <ProductDetail /> */}
      {/* <ProductListing /> */}
      {/* <HomePage /> */}
      <Footer />
    </div>
  );
}
