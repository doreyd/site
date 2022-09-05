import React from "react";
import { useDispatch } from "react-redux";
import styles from "./DocumentControl.module.css";
import Select from "./Select";

export default function Field(props) {
  const dispatch = useDispatch();

  const { field } = props;

  const onChangeHandler = (e) => {
    dispatch({
      type: "CHANGE_INSERT_FIELD",
      payload: {
        name: field?.name,
        field: "value",
        value: e.target.value,
      },
    });
  };

  return (
    <div className={styles["input-wrapper"]}>
      <div className={styles["input-key"]}>{field?.name}</div>
      <input
        type="text"
        onChange={onChangeHandler}
        className={styles.input}
        name={field?.name}
        value={field?.value}
      />
      <Select field={field} />
    </div>
  );
}
