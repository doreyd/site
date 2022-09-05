import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Color.module.css";

export default function LinearGradientHeader(props) {
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
        id: props.fillMode === "fill" ? linearFillID : linearStrokeID,
        field: e.target.id,
        value: e.target.value,
      },
    });
  };

  return (
    <div className={styles["gradient-line"]}>
      <div className={styles["from-to"]}>FROM :</div>
      <select
        id="x1"
        name="x1"
        value={props.data.x1}
        onChange={changeGradient}
        className={styles["offset-btn"]}
      >
        {rangeList.map((val) => {
          return <option value={val + "%"}>{val}%</option>;
        })}
      </select>
      <select
        id="y1"
        value={props.data.y1}
        onChange={changeGradient}
        name="y1"
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
      <div className={styles["from-to"]}>TO :</div>
      <select
        value={props.data.x2}
        onChange={changeGradient}
        id="x2"
        name="x2"
        className={styles["offset-btn"]}
      >
        {rangeList.map((val) => {
          return <option value={val + "%"}>{val}%</option>;
        })}
      </select>
      <select
        id="y2"
        value={props.data.y2}
        onChange={changeGradient}
        name="y2"
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
  );
}
