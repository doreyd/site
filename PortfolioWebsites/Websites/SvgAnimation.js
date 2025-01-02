import React, { useEffect, useState } from "react";
import styles from "./Websites.module.css";

export default function SvgAnimation() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.project}
      style={{ maxHeight: "280px", maxWidth: "280px" }}
    >
      {time % 4 === 0 && (
        <div className={styles.design}>Great Responsive Design</div>
      )}
      {time % 4 === 1 && <div className={styles.code}>Robust Clean Code</div>}
      {time % 4 === 2 && (
        <div className={styles.webdev}>User Friendly Interfaces</div>
      )}
      {time % 4 === 3 && (
        <div className={styles.hosting}>Secure Cloud Hosting</div>
      )}
    </div>
  );
}
