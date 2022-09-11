import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Updater.module.css";

import FieldOperator from "./FieldOperator";
import FieldsName from "./FieldsName";
import FieldValue from "./FieldValue";
import FieldDelete from "./FieldDelete";

export default function UpdateLine(props) {
  const { updateFieldsData } = useSelector((state) => state);

  const thisLine = updateFieldsData[props.id];

  return (
    <div
      className={styles["menu"]}
      style={{ width: "90%", alignItems: "flex-start", height: "4.5rem" }}
    >
      <FieldsName id={props.id} value={thisLine["val1"]} />
      <FieldOperator id={props.id} value={thisLine["val2"]} />
      <FieldValue
        id={props.id}
        value={thisLine["val3"]}
        type={thisLine["val4"]}
        operator={thisLine["val2"]}
      />
      <FieldDelete id={props.id} />
    </div>
  );
}
