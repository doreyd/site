import React from "react";
import { useDispatch } from "react-redux";
import Option from "./Option";

export default function Select(props) {
  const { field } = props;

  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    dispatch({
      type: "CHANGE_INSERT_FIELD",
      payload: {
        name: field?.name,
        field: "type",
        value: e.target.value,
      },
    });
  };

  const dataTypes = [
    "String",
    "Integer",
    "Double",
    "Boolean",
    "Array",
    "Object",
    "Date",
  ];

  return (
    <select
      style={{
        background: "rgb(4, 28, 15)",
        color: "white",
        top: "1.2rem",
        height: "1.3rem",
        border: "1px solid rgb(4, 28, 15)",
        cursor: "pointer",
      }}
      value={field?.type}
      onChange={onChangeHandler}
      name="dataType"
      id="dataType"
    >
      {dataTypes.map((type) => {
        return <Option value={type} />;
      })}
    </select>
  );
}
