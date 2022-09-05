import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Query.module.css";

export default function FieldDelete(props) {
  const dispatch = useDispatch();

  const deleteField = (e) => {
    dispatch({
      type: "DELETE_QUERY_FIELD",
      payload: {
        id: props.id,
      },
    });
  };

  return (
    <div
      className={styles["input-wrapper"]}
      id={props.id}
      onClick={deleteField}
    >
      <div className={styles.btn3}>DEL</div>
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
