import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import CloseIcon from "../CloseIcon/Close";

import { useSelector, useDispatch } from "react-redux";

export default function Modal() {
  const { modalOn, documentSelected, projection } = useSelector(
    (state) => state
  );

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const keys = Object.keys(documentSelected).map((key) => key);

  const getClass = (data) => {
    if (data === null || data === undefined) {
      return "";
    }
    switch (typeof data) {
      case "string":
        return "string-class";
      case "object":
        return [data instanceof Array ? `array-class` : `object-class`];
      case "number":
        return "number-class";
      case "boolean":
        return "boolean-class";
    }
  };

  const newFormat = (text) => {
    if (text === null || text === undefined) {
      return "";
    } else {
      return JSON.stringify(text);
    }
  };

  if (!modalOn) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.box}>
        <div className={styles.column}>
          <div className={styles["box-title"]}>
            Document's Data{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="white"
              height="20"
              width="20"
              className={styles.close}
              onClick={clickHandler}
            >
              <path d="m16.5 33.6 7.5-7.5 7.5 7.5 2.1-2.1-7.5-7.5 7.5-7.5-2.1-2.1-7.5 7.5-7.5-7.5-2.1 2.1 7.5 7.5-7.5 7.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />{" "}
            </svg>
          </div>
          {keys.map((el) => {
            if (projection[el]) {
              return (
                <div className={styles.line}>
                  <div className={styles.line}>{el}</div>
                  <div className={styles[getClass(documentSelected[el])]}>
                    {newFormat(documentSelected[el])}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
