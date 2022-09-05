import React from "react";
import styles from "./Loader.module.css";

export default function Loader(props) {
  const border = props.light ? `6px solid white` : `6px solid rgb(19, 77, 45)`;
  const borderColor = props.light
    ? `white transparent white transparent`
    : `rgb(19, 77, 45) transparent rgb(19, 77, 45) transparent`;
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.loader}
        sytles={{
          border: { border },
          borderColor: { borderColor },
        }}
      ></div>
    </div>
  );
}
