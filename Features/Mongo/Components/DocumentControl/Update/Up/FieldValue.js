import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Updater.module.css";

import Select from "./Select";

export default function FieldValue(props) {
  const dispatch = useDispatch();

  const changeField = (e) => {
    dispatch({
      type: "CHANGE_UPDATE_FIELD",
      payload: {
        id: props.id,
        field: "val3",
        value: e.target.value,
      },
    });
  };

  const specialOps = [
    "$set",
    "$setOnInsert",
    "$rename",
    "$unset",
    "$addToSet",
    "$pop",
    "$pull",
    "$push",
    "$pullAll",
  ];

  return (
    <div className={styles["input-wrapper"]}>
      <div className={styles["input-key"]}>Value</div>

      <input
        onChange={changeField}
        type="text"
        className={styles.input}
        name={"val3"}
        value={props.value}
      />
      {specialOps.includes(props.operator) ? (
        <Select id={props.id} type={props.type} />
      ) : null}
    </div>
  );
}
