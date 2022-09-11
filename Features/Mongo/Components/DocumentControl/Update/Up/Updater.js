import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Updater.module.css";
import UpdateLine from "./UpdateLine";

export default function Updater(props) {
  const dispatch = useDispatch();
  const { updateFieldsList, updateFieldsData, allKeys } = useSelector(
    (state) => state
  );

  const addNewField = () => {
    dispatch({ type: "ADD_UPDATE_FIELD", payload: Math.random() });
  };

  return (
    <Fragment>
      <div className={styles["form-title"]} style={{ marginTop: "1rem" }}>
        {updateFieldsList.length === 0
          ? `Please Add modifications to apply`
          : "List Of modifications"}
      </div>
      <div className={styles["menu-vertical"]}>
        {updateFieldsList.map((id) => {
          let line = updateFieldsData[id];
          return <UpdateLine id={id} line={line} allKeys={allKeys} />;
        })}
      </div>
      <div className={styles["menu2"]}>
        <div className={styles.btn2} onClick={addNewField}>
          Add New Modification
        </div>
        <div className={styles.btn2} onClick={props.btnHandler}>
          {props.btnTitle}
        </div>
      </div>
    </Fragment>
  );
}
