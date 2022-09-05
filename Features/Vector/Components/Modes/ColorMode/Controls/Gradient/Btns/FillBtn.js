import React from "react";
import styles from "../Color.module.css";

export default function FillBtn(props) {
  return (
    <div
      className={
        props.target === "fill"
          ? `${styles["gradient-btn-active"]}`
          : `${styles["gradient-btn"]}`
      }
      onClick={props.setTarget.bind(null, "fill")}
    >
      FILL
    </div>
  );
}
