import React from "react";
import styles from "./Size.module.css";

export default function Apply(props) {
  return (
    <svg
      className={styles.apply}
      viewBox="0 0 48 48"
      onClick={props.clickHandler}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
    </svg>
  );
}
