import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Query.module.css";
import Select from "./Select";

export default function FieldValue(props) {
  const dispatch = useDispatch();

  const changeField = (e) => {
    dispatch({
      type: "CHANGE_QUERY_FIELD",
      payload: {
        id: props.id,
        field: "val3",
        value: e.target.value,
      },
    });
  };

  return (
    <div className={styles["input-wrapper"]}>
      <div className={styles["input-key"]}>{"Value"}</div>
      <input
        onChange={changeField}
        type="text"
        className={styles.input}
        name={"val3"}
        value={props.value}
      />
      <Select type={props.type} id={props.id} />
    </div>
  );
}
