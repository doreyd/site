import React from "react";
import styles from "./Photoplus.module.css";

import Menu from './Menu/Menu'
import Home from './Home/Home'
import Services from './Services/Services'
import Quote from './Quote/Quote'
import Footer from './Footer/Footer'

export default function Main() {
  return (
    <div className={styles.main}>
      <Menu />
      <Home />
      <Services />      
      <Quote />
      <Footer />
    </div>
  );
}
