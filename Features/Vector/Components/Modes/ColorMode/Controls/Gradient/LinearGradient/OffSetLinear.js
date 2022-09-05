import { useDispatch, useSelector } from "react-redux";

import styles from "../Color.module.css";

export default function OffSet(props) {
  const generateRange = () => {
    let range = [];
    for (let i = 0; i < 21; i++) {
      range.push(i * 5);
    }
    return range;
  };

  const rangeList = generateRange();

  const dispatch = useDispatch();

  const { hue, saturation, lightness, elemSelected } = useSelector(
    (state) => state
  );

  const elemsState = useSelector((state) => state.elemsState);

  const { linearFillID, radialFillID, linearStrokeID, radialStrokeID } =
    elemsState[elemSelected];

  const selectColor = (property, e) => {
    const style = {
      stopColor:
        property === "stopColor"
          ? `hsl(${hue}, ${saturation}%, ${lightness}%)`
          : props.style.stopColor,
      stopOpacity:
        property === "stopOpacity"
          ? parseInt(e.target.value) / 100
          : props.style.stopOpacity,
    };

    let field = property === "offset" ? "offset" : "style";
    let value = property === "offset" ? e.target.value : style;

    dispatch({
      type: "CHANGE_OFFSET",
      payload: {
        id: props.fillMode === "fill" ? linearFillID : linearStrokeID,
        index: props.index,
        field: field,
        value: value,
      },
    });
  };

  return (
    <div className={styles["gradient-line"]}>
      Offset {props.index + 1}:
      <select
        id="offset"
        name="offset"
        value={props.offset}
        onChange={selectColor.bind(null, "offset")}
        className={styles["offset-btn"]}
      >
        {rangeList.map((val) => {
          return <option className={styles["offset-option"]}>{val}%</option>;
        })}
      </select>
      <div
        className={styles["gradient-btn"]}
        onClick={selectColor.bind(null, "stopColor")}
        style={{
          background: props.style.stopColor,
        }}
      >
        {" "}
        COLOR
      </div>
      {/* <div className={styles["gradient-btn"]}>{props.data.style.opacity}</div> */}
      <select
        id="opacity"
        onChange={selectColor.bind(null, "stopOpacity")}
        name="opacity"
        className={styles["offset-btn"]}
        value={props.style.stopOpacity * 100 + "%"}
      >
        {rangeList.map((val) => {
          return <option className={styles["offset-option"]}>{val}%</option>;
        })}
      </select>
    </div>
  );
}
