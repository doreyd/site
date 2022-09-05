import React, { useRef } from "react";

import styles from "./Dot.module.css";
import useDragFocals from "./useDragFocals";

export default function Focals(props) {
  const focalRef = useRef();

  const { elemsState, updateDrag, selectElement } = useDragFocals(
    focalRef,
    props,
    "Pen"
  );

  return (
    <circle
      ref={focalRef}
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
