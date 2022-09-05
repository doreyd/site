import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Modifier.module.css";
import HueDisplay from "../Display/HueDisplay";

export default function Modifier(props) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state[props.field]);

  const onChangeHandler = (e) => {
    props.setValue({ field: props.field, value: e.target.value });
    dispatch({
      type: "SET_COLOR_PROP",
      payload: { field: props.field, value: e.target.value },
    });
  };

  const classApplied =
    props.name === "HUE" ? "prop-edit-range-hue" : "prop-edit-range";

  return (
    <Fragment>
      <div className={styles["prop"]}>
        <div className={styles["prop-name"]}>{props.name} : </div>
        <div className={styles["prop-value"]}>{value}</div>
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
        value={value}
        color="red"
        onChange={onChangeHandler}
      />
    </Fragment>
  );
}
