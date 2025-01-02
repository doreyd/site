import React, { useEffect, useState } from "react";
import styles from "./FullStock.module.css";
import paths from "./SVGs/paths";

export default function SvgAnimation() {
  const lines = [
    [
      [50, 20, 50, 45],
      [53, 20, 53, 45],
    ],
    [
      [79, 35, 53, 55],
      [81, 37, 55, 57],
    ],
    [
      [18, 34, 53, 53],
      [21, 40, 55, 58],
    ],
    [
      [18, 75, 53, 57],
      [21, 77, 55, 59],
    ],
    [
      [81, 74, 53, 53],
      [83, 79, 55, 59],
    ],
  ];
  return (
    <div
      className={styles.project}
      style={{ maxHeight: "300px", maxWidth: "300px" }}
    >
      <svg viewBox="0 0 100 100" className={styles.lines}>
        {lines.map((twoLines) => {
          let [line1, line2] = twoLines;
          return (
            <g key={Math.random()}>
              <line
                x1={line1[0]}
                y1={line1[1]}
                x2={line1[2]}
                y2={line1[3]}
                strokeDasharray="2"
                strokeWidth="1"
                className={styles.line1}
              />
              <line
                x1={line2[2]}
                y1={line2[3]}
                x2={line2[0]}
                y2={line2[1]}
                strokeDasharray="2"
                strokeWidth="1"
                className={styles.line2}
              />
            </g>
          );
        })}
        <line x1={90} y1={80} x2={90} y2={93} strokeWidth="1" stroke="black" />
        <line x1={90} y1={93} x2={65} y2={93} strokeWidth="1" stroke="black" />

        <line x1={10} y1={80} x2={10} y2={93} strokeWidth="1" stroke="black" />
        <line x1={10} y1={93} x2={43} y2={93} strokeWidth="1" stroke="black" />
      </svg>
      <svg viewBox="0 0 48 48" className={styles.factory}>
        {paths["factory"]}
      </svg>
      <svg viewBox="0 0 48 48" className={styles.truck}>
        {paths["truck"]}
      </svg>
      <svg viewBox="0 0 48 48" className={styles.warehouse}>
        {paths["warehouse"]}
      </svg>
      <svg viewBox="0 0 48 48" className={styles.screen3}>
        {paths["screen3"]}
      </svg>
      <svg viewBox="0 0 48 48" className={styles.screen2}>
        {paths["screen2"]}
      </svg>
      <svg viewBox="0 0 48 48" className={styles.screen1}>
        {paths["screen1"]}
      </svg>

      <svg viewBox="0 0 48 48" className={styles.server2}>
        {paths["server2"]}
      </svg>
    </div>
  );
}
