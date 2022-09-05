import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Edit.module.css";

export default function ScaleDimension(props) {
  const dispatch = useDispatch();
  const elemsState = useSelector((state) => state.elemsState);
  const elemSelected = useSelector((state) => state.elemSelected);

  const rescale = (e) => {
    dispatch({ type: "RESCALE", payload: e.target.value });
  };

  const { scale } = elemsState[elemSelected];

  return (
    <Fragment>
      <div className={styles["prop"]}>
        <div className={styles["prop-name"]}>Scale : </div>
        <div className={styles["prop-value"]}>{scale}</div>
        <input
          type="text"
          spellCheck={false}
          className={styles["prop-edit"]}
          onBlur={rescale}
        />
      </div>
      <input
        type="range"
        className={styles["prop-edit-range"]}
        step={0.01}
        min={0}
        max={2}
        onChange={rescale}
        value={scale}
      />
    </Fragment>
  );
}
