import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Query.module.css";

import FieldOperator from "./FieldOperator";
import FieldsName from "./FieldsName";
import FieldValue from "./FieldValue";
import FieldDelete from "./FieldDelete";

export default function QueryLine(props) {
  const { queryFieldsData } = useSelector((state) => state);

  const thisLine = queryFieldsData[props.id];

  return (
    <div className={styles["menu"]} style={{ width: "90%" }}>
      <FieldsName id={props.id} value={thisLine["val1"]} />
      <FieldOperator id={props.id} value={thisLine["val2"]} />
      <FieldValue
        id={props.id}
        value={thisLine["val3"]}
        type={thisLine["val4"]}
      />
      <FieldDelete id={props.id} />
    </div>
  );
}
