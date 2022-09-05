import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Option from "./Option";

export default function Select(props) {
  const { app } = useSelector((state) => state);
  const { field } = props;

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch({
      type: "CHANGE_QUERY_FIELD",
      payload: {
        id: props.id,
        field: "val4",
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
        width: "80%",
        height: "1.3rem",
        border:"1px solid rgb(4, 28, 15)",
        cursor: "pointer",
      }}
      value={props.type}
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
