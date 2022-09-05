import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Show.module.css";

export default function ProjectionCheckBox(props) {
  const dispatch = useDispatch();
  const { projection } = useSelector((state) => state);

  const clickHandler = () => {
    dispatch({ type: "TOGGLE_CHECK", payload: props.name });
  };

  return (
    <div className={styles["input-wrapper2"]}>
      <input
        onChange={clickHandler}
        type="checkbox"
        className={styles.checkbox}
        id={props.name}
        name={props.name}
        value={props.name}
        checked={projection[props.name]}
      />
      <label htmlFor={props.name} className={styles["checkbox-key"]}>
        {props.name}
      </label>
    </div>
  );
}
