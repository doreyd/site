import React, { useRef } from "react";

import styles from "./Dot.module.css";
import useDragDot from "./useDragDot";

export default function Dot(props) {
  const dotRef = useRef();

  const { elemsState, updateDrag, selectElement } = useDragDot(dotRef, props, "Pen");

  return (
    <circle
      ref={dotRef}
      onClick={selectElement}
      onMouseOver={updateDrag}
      draggable={true}
      cx={props.cx}
      cy={props.cy}
      r="5"
      fill={props.fill ? props.fill : "green"}
      className={styles["dot"]}
    />
  );
}
