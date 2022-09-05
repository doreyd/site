import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Color.module.css";

export default function RadialGradientHeader(props) {
  const generateRange = () => {
    let range = [];
    for (let i = 0; i < 21; i++) {
      range.push(i * 5);
    }
    return range;
  };

  const rangeList = generateRange();

  const { hue, saturation, lightness, elemSelected } = useSelector(
    (state) => state
  );

  const elemsState = useSelector((state) => state.elemsState);

  const { linearFillID, radialFillID, linearStrokeID, radialStrokeID } =
    elemsState[elemSelected];

  const dispatch = useDispatch();

  const changeGradient = (e) => {
    dispatch({
      type: "CHANGE_GRADIENT",
      payload: {
        id: props.fillMode === "fill" ? radialFillID : radialStrokeID,
        field: e.target.id,
        value: e.target.value,
      },
    });
  };

  return (
    <div className={styles["gradient-line"]}>
      <div className={styles["gradient-column"]}>
        <div className={styles["gradient-name"]}>cx</div>
        <select
          onChange={changeGradient}
          id="cx"
          name="cx"
          value={props.data.cx}
          className={styles["offset-btn"]}
        >
          {rangeList.map((val) => {
            return (
              <option className={styles["offset-option"]} value={val + "%"}>
                {val}%
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles["gradient-column"]}>
        <div className={styles["gradient-name"]}>cy</div>
        <select
          onChange={changeGradient}
          value={props.data.cy}
          id="cy"
          name="cy"
          className={styles["offset-btn"]}
        >
          {rangeList.map((val) => {
            return (
              <option className={styles["offset-option"]} value={val + "%"}>
                {val}%
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles["gradient-column"]}>
        <div className={styles["gradient-name"]}>r</div>
        <select
          onChange={changeGradient}
          value={props.data.r}
          id="r"
          name="r"
          className={styles["offset-btn"]}
        >
          {rangeList.map((val) => {
            return (
              <option className={styles["offset-option"]} value={val + "%"}>
                {val}%
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles["gradient-column"]}>
        <div className={styles["gradient-name"]}>rx</div>
        <select
          onChange={changeGradient}
          value={props.data.rx}
          id="rx"
          name="rx"
          className={styles["offset-btn"]}
        >
          {rangeList.map((val) => {
            return (
              <option className={styles["offset-option"]} value={val + "%"}>
                {val}%
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles["gradient-column"]}>
        <div className={styles["gradient-name"]}>ry</div>
        <select
          onChange={changeGradient}
          value={props.data.ry}
          id="ry"
          name="ry"
          className={styles["offset-btn"]}
        >
          {rangeList.map((val) => {
            return (
              <option className={styles["offset-option"]} value={val + "%"}>
                {val}%
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
