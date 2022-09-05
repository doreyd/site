import React from "react";
import styles from "../Color.module.css";

export default function NoGradientBtn(props) {
  return (
    <div
      className={
        // (props.target === "fill" && props.gradient === "none") ||
        // (props.target === "stroke" && props.strokeGradient === "none")
        (props.currentGradient === "none")
          ? `${styles["gradient-btn-active"]}`
          : `${styles["gradient-btn"]}`
      }
      onClick={props.setGradient.bind(null, "none")}
    >
      NONE
    </div>
  );
}
