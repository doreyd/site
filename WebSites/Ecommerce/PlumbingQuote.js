import React from "react";
import styles from "./Plumbing.module.css";

import Menu from './Menu/Menu'
import Quote from './Quote/Quote'
import Footer from './Footer/Footer'

export default function Main() {
  return (
    <div className={styles.main}>
      <Menu />
      <Quote />
      <Footer />
    </div>
  );
}
