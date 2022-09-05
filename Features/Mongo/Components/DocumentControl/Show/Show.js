import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Show.module.css";
import ProjectionCheckBox from "./ProjectionCheckBox";

export default function Documents(props) {
  const dispatch = useDispatch();
  const { allKeys } = useSelector((state) => state);

  const resetProjection = (value) => {
    let newProjection = {};
    allKeys.forEach((key) => {
      newProjection = { ...newProjection, [key]: value };
    });
    dispatch({ type: "CHECK_ALL", payload: newProjection });
  };

  return (
    <form className={styles["form-wrapper"]}>
      <div className={styles["form-wrapper"]}>
        <div className={styles["inside-wrapper"]} id="projection">
          {allKeys.map((field, index) => {
            return (
              <ProjectionCheckBox key={index} name={field} index={index} />
            );
          })}
        </div>
      </div>
      <div className={styles["inside-wrapper"]}>
        <div
          className={styles.btn2}
          onClick={resetProjection.bind(this, true)}
          style={{ marginRight: "1rem" }}
        >
          SELECT ALL FIELDS
        </div>
        <div
          className={styles.btn2}
          onClick={resetProjection.bind(this, false)}
        >
          UNSELECT ALL FIELDS
        </div>
      </div>
    </form>
  );
}
