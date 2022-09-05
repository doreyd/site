import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Updater.module.css";

export default function FieldOperator(props) {
  const { app } = useSelector((state) => state);
  const dispatch = useDispatch();

  const operators = [
    "$set",
    "$setOnInsert",
    "$inc",
    "$mul",
    "$min",
    "$max",
    "$rename",
    "$unset",
    "$addToSet",
    "$pop",
    "$pull",
    "$push",
    "$pullAll",
    "$currentDate",
  ];

  const operatorData = {
    $set: "set",
    $currentDate: "currentDate",
    $inc: "increment",
    $min: "minimum",
    $max: "maximum",
    $mul: "multiply",
    $rename: "rename",
    $setOnInsert: "set on insert",
    $unset: "unset", //{ quantity: "", instock: "" }
    $addToSet: "add to set", // Adds elements to an array only if they do not already exist in the set.
    $pop: "pop", // 	Removes the first or last item of an array.
    $pull: "pull", //	Removes all array elements that match a specified query.
    $push: "push", //	Adds an item to an array.
    $pullAll: "pull all", //Removes all matching values from an array.
  };

  // const operators = [
  //   "$eq",
  //   "$ne",
  //   "$gt",
  //   "$lt",
  //   "$gte",
  //   "$lte",
  //   //"$in",
  //   //"$nin",
  // ];
  // const operatorData = {
  //   $eq: "equal",
  //   $ne: "not equal",
  //   $gt: "larger than",
  //   $lt: "less than",
  //   $gte: "larger or equal",
  //   $lte: "less or equal",
  //   // "$in", "in",
  //   // "$nin", "not in",
  // };

  const changeField = (e) => {
    dispatch({
      type: "CHANGE_UPDATE_FIELD",
      payload: {
        id: props.id,
        field: "val2",
        value: e.target.value,
      },
    });
  };

  return (
    <div className={styles["input-wrapper"]} style={{ alignItems: "center" }}>
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
    </div>
  );
}
