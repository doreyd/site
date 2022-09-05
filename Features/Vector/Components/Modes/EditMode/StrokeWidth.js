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
    ? parseFloat(elemsState[elemSelected]["strokeWidth"]).toFixed(2)
    : "";

  const changeStrokeWidth = (e) => {
    dispatch({
      type: "UPDATE_PROP",
      payload: {
        id: elemSelected,
        name: "strokeWidth",
        value: e.target.value,
      },
    });
  };

  return (
    <Fragment>
      <div className={styles["prop"]}>
        <div className={styles["prop-name"]}>Stroke : </div>
        <div className={styles["prop-value"]}>{currentValue}</div>
        <input
          type="text"
          spellCheck={false}
          className={styles["prop-edit"]}
          onBlur={changeStrokeWidth}
        />
      </div>
      <input
        type="range"
        className={styles["prop-edit-range"]}
        min={0}
        max={20}
        onChange={changeStrokeWidth}
        value={currentValue}
      />
    </Fragment>
  );
}
