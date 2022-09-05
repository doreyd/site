import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Query.module.css";

export default function FieldOperator(props) {
  const { app } = useSelector((state) => state);
  const dispatch = useDispatch();

  const operators = [
    "$eq",
    "$ne",
    "$gt",
    "$lt",
    "$gte",
    "$lte",
    //"$in",
    //"$nin",
  ];
  const operatorData = {
    $eq: "equal",
    $ne: "not equal",
    $gt: "larger than",
    $lt: "less than",
    $gte: "larger or equal",
    $lte: "less or equal",
    // "$in", "in",
    // "$nin", "not in",
  };

  const changeField = (e) => {
    dispatch({
      type: "CHANGE_QUERY_FIELD",
      payload: {
        id: props.id,
        field: "val2",
        value: e.target.value,
      },
    });
  };

  return (
    <div className={styles["input-wrapper"]}>
      <div className={styles["input-key"]}>Operator</div>

      <select
        style={{
          background: "rgb(4, 28, 15)",
          color: "white",
          top: "1.2rem",
          width: "80%",
          height: "1.3rem",
          border: "1px solid rgb(4, 28, 15)",
          cursor: "pointer",
        }}
        onChange={changeField}
        defaultValue={"$eq"}
        value={props.value}
        name="val2"
      >
        {operators.map((operator) => {
          return (
            <option
              style={{
                border: "0px solid white",
                cursor: "pointer",
                border: "1px solid white",
              }}
              value={operator}
            >
              {operatorData[operator]}
            </option>
          );
        })}
      </select>
      <div
        style={{
          background: "rgb(4, 28, 15)",
          color: "white",
          top: "1.2rem",
          height: "1.3rem",
          border: "1px solid rgb(4, 28, 15)",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
