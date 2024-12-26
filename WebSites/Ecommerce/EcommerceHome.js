import React from "react";
import styles from "./Ecommerce.module.css";

import Menu from './Menu/Menu'
import Home from './Home/Home'
import Footer from './Footer/Footer'

export default function Main() {
  return (
    <div className={styles.main}>
      <Menu />
      <Home />
      <Footer />
    </div>
  );
}
