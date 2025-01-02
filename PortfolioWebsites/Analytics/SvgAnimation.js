import React, { useEffect, useState } from "react";
import styles from "./Analytics.module.css";

export default function Analytics() {




  return (
    <div className={styles.wrapper}>
      <div className={styles['txt-wrapper']}>
        <div className={styles.txt}> Great Website <br />For your Business </div>
      </div>
      <img src='/portfolio/plumbing-img-1-small.png' className={styles.img1} />
      {/* <img src='/portfolio/plumbing-img-2-small.png' className={styles.img2} /> */}
    </div>
  );
}
