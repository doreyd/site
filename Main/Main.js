import React from "react";
import styles from "./Main.module.css";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import Work from "../Portfolio/Work";
import Mail from "../Mail/Mail";

export default function Main() {
  return (
    <div className={styles.main}>
      <Home />
      <Portfolio />
      <Work />
      <Footer />
<Mail />
    </div>
  );
}
