import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Edit.module.css";

export default function Rotate(props) {
  const dispatch = useDispatch();
  const elemsState = useSelector((state) => state.elemsState);
  const elemSelected = useSelector((state) => state.elemSelected);

  const currentAngle = elemsState[elemSelected]
    ? elemsState[elemSelected]["angle"]
    : 0;
  const currentTurns = elemsState[elemSelected]
    ? elemsState[elemSelected]["turns"]
    : 0;

  const type = elemsState[elemSelected] ? elemsState[elemSelected]["type"] : 0;

  const onChangeHandler = (e) => {
    dispatch({
      type: type === "Cursor" ? "ROTATE_DOTS" : "ROTATE",
      payload: {
        id: elemSelected,
        name: "angle",
        value: e.target.value,
      },
    });
  };

  return (
    <Fragment>
      <div className={styles["prop"]}>
        <div>
          {" "}
          Rorate {currentAngle}°{" "}
          <input
            type="text"
            spellCheck={false}
            className={styles["prop-edit"]}
            onBlur={onChangeHandler}
          />
        </div>
        <div>
          {currentTurns} turns{" "}
          <input
            type="text"
            spellCheck={false}
            className={styles["prop-edit"]}
            // onBlur={onChangeTurn}
          />
        </div>
      </div>
      <input
        type="range"
        className={styles["prop-edit-range"]}
        min={0}
        max={360}
        onChange={onChangeHandler}
        value={currentAngle}
      />
    </Fragment>
  );
}
