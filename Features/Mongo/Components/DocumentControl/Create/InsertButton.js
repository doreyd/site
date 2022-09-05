import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./DocumentControl.module.css";

export default function InsertButton(props) {
  const dispatch = useDispatch();

  const addNewField = () => {
    let randId = Math.random();
    dispatch({
      type: "ADD_EXTRA_INSERT_FIELD",
      payload: {
        id: randId,
        obj: {
          id: randId,
          name: "",
          value: "",
          type: "string",
        },
      },
    });
  };

  return (
    <div className={styles["menu"]}>
      <div className={styles.btn2} onClick={addNewField}>
        Add New Field
      </div>
      <div className={styles.btn2} onClick={props.clickHandler}>
        Insert New Document
      </div>
    </div>
  );
}
