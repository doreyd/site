import React from "react";
import styles from "./Main.module.css";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import PortfolioWebsites from "../PortfolioWebsites/PortfolioWebsites";
import Work from "../Portfolio/Work";
import Mail from "../Mail/Mail";
import PortfolioSEO from '../SeoBanner/SEO/PortfolioSEO'

export default function Main() {
  return (
    <div className={styles.main}>
      <Home />
      <PortfolioSEO />
      <PortfolioWebsites />
      <Portfolio />
      <Work />
      <Footer />
      <Mail />
    </div>
  );
}
