import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Documents.module.css";

export default function OneDocument(props) {
  const dispatch = useDispatch();
  const { allKeys, projection, app } = useSelector((state) => state);

  const clickHandler = (document) => {
    dispatch({
      type: "SELECT_DOCUMENT",
      payload: document,
    });
  };

  const formatData = (data) => {
    if (data === null || data === undefined) {
      return "";
    }
    switch (typeof data) {
      case "string":
        return data.length > 4 ? data.substring(0, 4) + "..." : data;
      case "object":
        return data instanceof Array
          ? `[${data.length !== 0 ? data.length : ""}]`
          : `{${Object.keys(data).length === 0 ? "" : "..."}}`;
      case "number":
        return data;
      case "boolean":
        return JSON.stringify(data);
      case "date":
        return Date(data);
    }
  };

  return (
    <div
      className={styles["document"]}
      key={props.index}
      onClick={clickHandler.bind(this, props.document)}
    >
      {allKeys.map((key) => {
        if (projection[key]) {
          return (
            <div
              className={styles.key}
              key={key}
              style={{ overflow: "hidden" }}
            >
              {/* {formatData(props.document[key])} */}
              {props.document[key]}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
