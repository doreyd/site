import React, { Fragment } from "react";
import styles from "./Edit.module.css";

export default function ScalingType(props) {
  return (
    <Fragment>
      <div className={styles["scale"]}>
        <label className={styles["checkbox-label"]}>
          {" "}
          Seperately{" "}
          <input
            className={styles["checkbox"]}
            type="checkbox"
            onChange={props.setScalingType.bind(null, "seperately")}
            checked={props.scalingType === "seperately"}
          />
        </label>

        <label className={styles["checkbox-label"]}>
          {" "}
          Equally{" "}
          <input
            className={styles["checkbox"]}
            type="checkbox"
            onChange={props.setScalingType.bind(null, "equally")}
            checked={props.scalingType === "equally"}
          />
        </label>

        <label className={styles["checkbox-label"]}>
          Proportionally{" "}
          <input
            className={styles["checkbox"]}
            type="checkbox"
            onChange={props.setScalingType.bind(null, "proportionally")}
            checked={props.scalingType === "proportionally"}
          />
        </label>
      </div>
    </Fragment>
  );
}
