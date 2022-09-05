import React from "react";
import styles from "./Sorry.module.css";

export default function Sorry() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>Sorry but your screen is too small.</div>
    </div>
  );
}
