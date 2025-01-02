import React, { useEffect, useState } from "react";
import styles from "./FullStock.module.css";
import paths from "./SVGs/paths";

export default function SvgAnimation({ setModalOn }) {


  const openModal = () => setModalOn(true)

  return (
    <div
      className={styles.project}
      onClick={openModal}
      style={{ maxHeight: "300px", maxWidth: "300px" }}
    >
      <img src='/portfolio/shop1.png' className={styles.img1} />
      {/* <img src='/portfolio/shop2b.png' className={styles.img2} />
      <img src='/portfolio/shop3.png' className={styles.img3} /> */}
    </div>
  );
}
