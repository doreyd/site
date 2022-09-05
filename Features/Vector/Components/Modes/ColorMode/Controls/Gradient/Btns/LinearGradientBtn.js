import React from "react";
import styles from "../Color.module.css";

export default function LinearGradientBtn(props) {
  return (
    <div
      className={
        // (props.target === "fill" && props.gradient === "linear") ||
        // (props.target === "stroke" && props.strokeGradient === "linear")
        (props.currentGradient === "linear")
          ? `${styles["gradient-btn-active"]}`
          : `${styles["gradient-btn"]}`
      }
      onClick={props.setGradient.bind(null, "linear")}
    >
      LINEAR GRADIENT
    </div>
  );
}
