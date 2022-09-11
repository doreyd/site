import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Updater.module.css";

export default function FieldsName(props) {
  const { app } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { allKeys } = useSelector((state) => state);

  const changeField = (e) => {
    dispatch({
      type: "CHANGE_UPDATE_FIELD",
      payload: {
        id: props.id,
        field: "val1",
        value: e.target.value,
      },
    });
  };

  return (
    <div className={styles["input-wrapper"]} style={{ alignItems: "center" }}>
      <div className={styles["input-key"]}>Field's Name</div>

      <select
        style={{
          background: "rgb(4, 28, 15)",
          color: "white",
          top: "1.2rem",
          width: "80%",
          height: "1.3rem",
          border: "1px solid rgb(4, 28, 15)",
          cursor: "pointer",
        }}
        onChange={changeField}
        value={props.value}
        name="val1"
        id="val1"
      >
        {allKeys.map((key) => {
          return (
            <option
              style={{
                border: "0px solid white",
                cursor: "pointer",
                border: "1px solid white",
              }}
              value={key}
            >
              {key}
            </option>
          );
        })}
      </select>
    </div>
  );
}
