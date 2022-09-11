import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Updater.module.css";

export default function FieldDelete(props) {
  const dispatch = useDispatch();

  const deleteField = (e) => {
    dispatch({
      type: "DELETE_UPDATE_FIELD",
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
      style={{marginTop:'0.8rem'}}
    >
      <div className={styles.btn3}>DEL</div>
    </div>
  );
}
