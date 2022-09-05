import React, { useEffect, useState } from "react";
import styles from "./MongoJuice.module.css";

export default function MongoJuice() {
  const color = "rgb(1,25,48)";
  const colorCenter = "rgb(1,25,48)";

  return (
    <div className={styles["svg-animation"]}>
      <div className={styles.rotater}>
        <svg
          viewBox="0 0 48 48"
          className={styles.svg}
          fill={color}
          style={{
            opacity: 1,
            height: "100%",
            width: "100%",
          }}
        >
          <circle
            cx="50%"
            cy="50%"
            r="38%"
            fill="transparent"
            stroke="black"
            strokeWidth="0.2"
          />
        </svg>
        <svg
          viewBox="0 0 48 48"
          className={styles["svg-rotate"]}
          fill={color}
          style={{
            opacity: 1,
            height: "25%",
            width: "25%",
            left: "37.5%",
            top: "5%",
            borderRadius: "50%",
            background: "white",
          }}
        >
          <path d="M41 41.95H9q-1.2 0-2.1-.9-.9-.9-.9-2.1V9q0-1.2.9-2.1Q7.8 6 9 6h32q1.2 0 2.1.9.9.9.9 2.1v29.95q0 1.2-.9 2.1-.9.9-2.1.9ZM9 16.05h32V9H9Zm7.5 3H9v19.9h7.5Zm17 0v19.9H41v-19.9Zm-3 0h-11v19.9h11Z" />{" "}
        </svg>

        <svg
          viewBox="0 0 48 48"
          className={styles["svg-rotate"]}
          fill={color}
          style={{
            opacity: 1,
            height: "25%",
            width: "25%",
            left: "70.4%",
            top: "56.5%",
            borderRadius: "50%",
            background: "white",
          }}
        >
          <path d="M15.95 35.5h16.1v-3h-16.1Zm0-8.5h16.1v-3h-16.1ZM11 44q-1.2 0-2.1-.9Q8 42.2 8 41V7q0-1.2.9-2.1Q9.8 4 11 4h18.05L40 14.95V41q0 1.2-.9 2.1-.9.9-2.1.9Zm16.55-27.7V7H11v34h26V16.3ZM11 7v9.3V7v34V7Z" />
        </svg>

        <svg
          viewBox="0 0 48 48"
          className={styles["svg-rotate"]}
          fill={color}
          style={{
            opacity: 1,
            height: "25%",
            width: "25%",
            left: "4.6%",
            top: "56.5%",
            borderRadius: "50%",
            background: "white",
          }}
        >
          <path d="M24 22q-8.05 0-13.025-2.45T6 14q0-3.15 4.975-5.575Q15.95 6 24 6t13.025 2.425Q42 10.85 42 14q0 3.1-4.975 5.55Q32.05 22 24 22Zm0 10q-7.3 0-12.65-2.2Q6 27.6 6 24.5v-5q0 1.95 1.875 3.375t4.65 2.35q2.775.925 5.9 1.35Q21.55 27 24 27q2.5 0 5.6-.425 3.1-.425 5.875-1.325 2.775-.9 4.65-2.325Q42 21.5 42 19.5v5q0 3.1-5.35 5.3Q31.3 32 24 32Zm0 10q-7.3 0-12.65-2.2Q6 37.6 6 34.5v-5q0 1.95 1.875 3.375t4.65 2.35q2.775.925 5.9 1.35Q21.55 37 24 37q2.5 0 5.6-.425 3.1-.425 5.875-1.325 2.775-.9 4.65-2.325Q42 31.5 42 29.5v5q0 3.1-5.35 5.3Q31.3 42 24 42Z" />{" "}
        </svg>
      </div>
      <svg
        viewBox="0 0 48 48"
        className={styles.svg}
        fill={colorCenter}
        style={{
          opacity: 1,
          height: "40%",
          width: "40%",
          left: "30%",
          top: "30%",
        }}
      >
        <path d="M14 27.65q.7 0 1.175-.475.475-.475.475-1.175 0-.7-.475-1.175Q14.7 24.35 14 24.35q-.7 0-1.175.475-.475.475-.475 1.175 0 .7.475 1.175.475.475 1.175.475Zm0-8q.7 0 1.175-.475.475-.475.475-1.175 0-.7-.475-1.175Q14.7 16.35 14 16.35q-.7 0-1.175.475-.475.475-.475 1.175 0 .7.475 1.175.475.475 1.175.475Zm4 7.85h18v-3H18Zm0-8h18v-3H18ZM16.5 42v-4H7q-1.2 0-2.1-.9Q4 36.2 4 35V9q0-1.2.9-2.1Q5.8 6 7 6h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9h-9.5v4ZM7 35h34V9H7v26Zm0 0V9v26Z" />
      </svg>
    </div>
  );
}
