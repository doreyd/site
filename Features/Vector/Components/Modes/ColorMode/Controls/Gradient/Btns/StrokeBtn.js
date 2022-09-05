import React from "react";

import styles from "../Color.module.css";

export default function StrokeBtn(props) {
  return (
    <div
      className={
        props.target === "stroke"
          ? `${styles["gradient-btn-active"]}`
          : `${styles["gradient-btn"]}`
      }
      onClick={props.setTarget.bind(null, "stroke")}
    >
      STROKE
    </div>
  );
}
