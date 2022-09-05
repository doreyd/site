import React from "react";
import styles from "../Color.module.css";

export default function RadialGradientBtn(props) {
  return (
    <div
      className={
        // (props.target === "fill" && props.gradient === "radial") ||
        // (props.target === "stroke" && props.strokeGradient === "radial")
        (props.currentGradient === "radial")
          ? `${styles["gradient-btn-active"]}`
          : `${styles["gradient-btn"]}`
      }
      onClick={props.setGradient.bind(null, "radial")}
    >
      RADIAL GRADIENT
    </div>
  );
}
