import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../Color.module.css";

export default function NoGradient(props) {
  const dispatch = useDispatch();

  const { hue, saturation, lightness, elemSelected } = useSelector(
    (state) => state
  );

  const elemsState = useSelector((state) => state.elemsState);

  const { linearFillID, radialFillID, linearStrokeID, radialStrokeID } =
    elemsState[elemSelected];

  const selectColor = (color) => {
    dispatch({
      type: "SET_PROP",
      payload: {
        field: props.fillMode === "fill" ? "fill" : "stroke",
        value:
          color === true
            ? `hsl(${hue}, ${saturation}%, ${lightness}%)`
            : "transparent",
      },
    });
  };

  return (
    <Fragment>
      <div className={styles["gradient-line"]}>
        <div
          className={styles["current-color"]}
          style={{
            background: props.fillMode === "fill" ? props.fill : props.stroke,
          }}
        ></div>
      </div>
      <div className={styles["gradient-line"]}>
        <div
          className={styles["gradient-btn"]}
          onClick={selectColor.bind(null, true)}
        >
          CHANGE COLOR
        </div>
        <div className={styles["gradient-btn"]} onClick={selectColor}>
          SET TO TRANSPARENT
        </div>
      </div>
    </Fragment>
  );
}
