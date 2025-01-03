import React from "react";
import styles from "./Menu.module.css";

export default function DatabaseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={styles.logout}
    >
      <path d="M22.5 26.1V5.8h3v20.3Zm1.5 16q-3.7 0-6.975-1.425Q13.75 39.25 11.3 36.8q-2.45-2.45-3.875-5.725Q6 27.8 6 24.1q0-4 1.7-7.475 1.7-3.475 4.8-6.175l2.1 2.1q-2.65 2.15-4.125 5.125T9 24.1q0 6.25 4.375 10.625T24 39.1q6.25 0 10.625-4.375T39 24.1q0-3.45-1.475-6.475Q36.05 14.6 33.5 12.55l2.15-2.1q3 2.55 4.675 6.1Q42 20.1 42 24.1q0 3.7-1.425 6.975-1.425 3.275-3.85 5.725-2.425 2.45-5.7 3.875Q27.75 42.1 24 42.1Z" />
    </svg>
  );
}
