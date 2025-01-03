import React from "react";
import styles from "./Loader.module.css";

export default function Loader(props) {
  const border = props.light ? `6px solid white` : `6px solid rgb(19, 77, 45)`;
  const borderColor = props.light
    ? `white transparent white transparent`
    : `rgb(19, 77, 45) transparent rgb(19, 77, 45) transparent`;
  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.loader}
        fill={props.light ? `white` : `rgb(19, 77, 45)`}
        viewBox="0 0 48 48"
        // height="48"
        // width="48"
      >
        <path d="M24.05 40.1q-6.55 0-11.275-4.725Q8.05 30.65 8.05 24.1v-2.25l-4 4L2.1 23.9l7.45-7.45L17 23.9l-1.95 1.95-4-4v2.25q0 5.35 3.825 9.175Q18.7 37.1 24.05 37.1q1.45 0 2.75-.25t2.45-.75l2.15 2.15q-1.8 1-3.625 1.425-1.825.425-3.725.425Zm14.45-8.45-7.45-7.45 2-2L37 26.15V24.1q0-5.35-3.825-9.175Q29.35 11.1 24 11.1q-1.45 0-2.75.275t-2.45.675L16.65 9.9q1.8-1 3.625-1.4Q22.1 8.1 24 8.1q6.55 0 11.275 4.725Q40 17.55 40 24.1v2.15l4-4 1.95 1.95Z" />
      </svg>
    </div>
  );
}
