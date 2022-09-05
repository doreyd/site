import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./DocumentControl.module.css";

export default function IdField(props) {
  const dispatch = useDispatch();
  const { field } = props;

  const onChangeHandler = (e) => {
    dispatch({
      type: "CHANGE_INSERT_FIELD",
      payload: {
        name: "_id",
        field: "value",
        value: e.target.value,
      },
    });
  };

  return (
    <div className={styles["input-wrapper"]}>
      <div className={styles["input-id"]}>
        _id
        <span onClick={props.toggleIdStatus}>
          {props.status ? "disable" : "enable"}
        </span>
      </div>
      <input
        type="text"
        className={styles.input}
        style={{ opacity: props.status ? 1 : 0.3 }}
        onChange={onChangeHandler}
        value={field?.value}
        name={field?.name}
        disabled={!props.status}
      />
      <div
        style={{
          background: "rgb(4, 28, 15)",
          color: "white",
          top: "1.2rem",
          height: "1.3rem",
          border: "1px solid rgb(4, 28, 15)",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
