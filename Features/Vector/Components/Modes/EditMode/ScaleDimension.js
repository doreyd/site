import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Edit.module.css";

export default function ScaleDimension(props) {
  const dispatch = useDispatch();
  const elemsState = useSelector((state) => state.elemsState);
  const elemSelected = useSelector((state) => state.elemSelected);
  const { height, width, background } = useSelector(
    (state) => state.elemsState
  )["Svg-0"];

  const elemType = elemsState[elemSelected]
    ? elemsState[elemSelected]["type"]
    : "other";

  const currentValue = elemsState[elemSelected]
    ? parseFloat(elemsState[elemSelected][props.field]).toFixed(2)
    : "";

  return (
    <Fragment>
      <div className={styles["prop"]}>
        <div className={styles["prop-name"]}>{props.name} : </div>
        <div className={styles["prop-value"]}>{currentValue}</div>
        <input
          type="text"
          spellCheck={false}
          className={styles["prop-edit"]}
          onBlur={props.changeHandler}
        />
      </div>
      <input
        type="range"
        className={styles["prop-edit-range"]}
        min={0}
        max={elemType === "Circle" ? width / 2 : width}
        onChange={props.changeHandler}
        value={currentValue}
      />
    </Fragment>
  );
}
