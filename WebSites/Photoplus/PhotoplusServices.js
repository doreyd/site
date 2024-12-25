import React from "react";
import styles from "./Photoplus.module.css";

import Menu from './Menu/Menu'
import Services from './Services/Services'
import Footer from './Footer/Footer'

export default function Main() {
  return (
    <div className={styles.main}>
      <Menu />
      <Services />
      <Footer />
    </div>
  );
}
