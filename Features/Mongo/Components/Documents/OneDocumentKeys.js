import React from "react";
import styles from "./Documents.module.css";
import { useSelector } from "react-redux";

export default function OneDocumentKeys(props) {
  const { allKeys, projection, app } = useSelector((state) => state);

  return (
    <div className={styles["all-keys"]}>
      {allKeys.map((key) => {
        if (projection[key]) {
          return (
            <div
              className={styles.key}
              key={key}
              style={{ overflow: "hidden" }}
            >
              {key}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
