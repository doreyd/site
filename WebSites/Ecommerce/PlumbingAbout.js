import React from "react";
import styles from "./Plumbing.module.css";

import Menu from './Menu/Menu'
import About from './About/About'
import Footer from './Footer/Footer'

export default function Main() {
  return (
    <div className={styles.main}>
      <Menu />
      <About />
      <Footer />
    </div>
  );
}
