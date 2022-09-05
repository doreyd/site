import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../DocumentControl.module.css";

import Select from "./Select";

export default function NewField(props) {
  const dispatch = useDispatch();
  const { insertExtraFieldsList, insertFieldsData } = useSelector(
    (state) => state
  );

  const deleteHandler = (id) => {
    dispatch({ type: "DELETE_EXTRA_FIELD", payload: id });
  };

  const onChangeHandler = (e) => {
    dispatch({
      type: "CHANGE_EXTRA_INSERT_FIELD",
      payload: {
        id: e.target.id,
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <Fragment>
      {insertExtraFieldsList.map((id) => {
        if (!insertFieldsData[id]) {
          return null;
        }
        return (
          <div key={id} className={styles["menu"]} style={{ width: "92%" }}>
            <div className={styles["input-wrapper"]}>
              <div className={styles["input-key"]}>name</div>
              <input
                id={id}
                type="text"
                className={styles.input}
                name="name"
                value={insertFieldsData[id]["name"]}
                onChange={onChangeHandler}
                disabled={false}
              />
            </div>
            <div className={styles["input-wrapper"]}>
              <div className={styles["input-key"]}>value</div>
              <input
                id={id}
                type="text"
                className={styles.input}
                name="value"
                onChange={onChangeHandler}
                value={insertFieldsData[id]["value"]}
                disabled={false}
              />
            </div>
            <div style={{marginTop:'0.6rem'}}>
              <Select
                field={{ name: id, type: insertFieldsData[id]["type"] }}
              />
            </div>

            <div
              className={styles["input-wrapper"]}
              onClick={deleteHandler.bind(this, id)}
            >
              <div className={styles.btn3}>DEL</div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}
