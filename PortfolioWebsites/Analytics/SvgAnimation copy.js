import React, { useEffect, useState } from "react";
import styles from "./Analytics.module.css";

export default function Analytics() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const colors = {
    0: "#089b1f",
    1: "rgb(1,133,127)",
    2: "rgb(192,14,74)",
    3: "rgb(15,117,174)",
    4: "rgb(252, 145, 5)",
    5: "rgb(121, 25, 131)",
  };
  const data = [
    [14, 69, 41, 82, 54, 35],
    [47, 26, 62, 79, 29, 55],
    [41, 70, 66, 20, 45, 13],
    [68, 19, 82, 65, 37, 93],
    [59, 66, 47, 3, 89, 65],
  ];

  return (
    <div className={styles.svg}>
      <div
        className={styles.bar}
        style={{
          height: `${data[index % 5][0]}%`,
          background: `${colors[0]}`,
        }}
      />
      <div
        className={styles.bar}
        style={{
          height: `${data[index % 5][1]}%`,
          background: `${colors[1]}`,
        }}
      />
      <div
        className={styles.bar}
        style={{
          height: `${data[index % 5][2]}%`,
          background: `${colors[2]}`,
        }}
      />
      <div
        className={styles.bar}
        style={{
          height: `${data[index % 5][3]}%`,
          background: `${colors[3]}`,
        }}
      />
      <div
        className={styles.bar}
        style={{
          height: `${data[index % 5][4]}%`,
          background: `${colors[4]}`,
        }}
      />
      <div
        className={styles.bar}
        style={{
          height: `${data[index % 5][0]}%`,
          background: `${colors[5]}`,
        }}
      />
    </div>
  );
}
