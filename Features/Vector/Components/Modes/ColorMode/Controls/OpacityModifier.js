import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Modifier.module.css";
import HueDisplay from "../Display/HueDisplay";

export default function Modifier(props) {
  const dispatch = useDispatch();
  const elemSelected = useSelector((state) => state.elemSelected);
  const elemsState = useSelector((state) => state.elemsState);

  const value = elemsState[elemSelected]
    ? elemsState[elemSelected]["opacity"]
    : 1;

  const onChangeHandler = (e) => {
    props.setValue({ field: props.field, value: e.target.value / 100 });
    dispatch({
      type: "SET_PROP",
      payload: {
        id: elemSelected.id,
        field: "opacity",
        value: e.target.value / 100,
      },
    });
  };

  const classApplied =
    props.name === "HUE" ? "prop-edit-range-hue" : "prop-edit-range";

  return (
    <Fragment>
      <div className={styles["prop"]}>
        <div className={styles["prop-name"]}>{props.name} : </div>
        <div className={styles["prop-value"]}>{value * 100}</div>
        <input
          type="text"
          spellCheck={false}
          className={styles["prop-edit"]}
          onBlur={onChangeHandler}
        />
      </div>
      {props.name === "HUE" && <HueDisplay />}
      <input
        type="range"
        className={styles[classApplied]}
        min={props.min}
        max={props.max}
        value={value * 100}
        color="red"
        onChange={onChangeHandler}
      />
    </Fragment>
  );
}
