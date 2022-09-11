import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Select(props) {
  const dispatch = useDispatch();

  const changeField = (e) => {
    dispatch({
      type: "CHANGE_UPDATE_FIELD",
      payload: {
        id: props.id,
        field: "val4",
        value: e.target.value,
      },
    });
  };

  return (
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
      value={props.type}
      onChange={changeField}
      name="dataType"
      id="dataType"
    >
      <option
        style={{
          border: "0px solid white",
          cursor: "pointer",
          border: "1px solid rgb(4, 28, 15)",
        }}
        value="string"
      >
        String
      </option>
      <option
        style={{
          border: "0px solid white",
          cursor: "pointer",
          border: "1px solid rgb(4, 28, 15)",
        }}
        value="integer"
      >
        Integer
      </option>
      <option
        style={{
          border: "0px solid white",
          cursor: "pointer",
          border: "1px solid rgb(4, 28, 15)",
        }}
        value="double"
      >
        Float
      </option>
      <option
        style={{
          border: "0px solid white",
          cursor: "pointer",
          border: "1px solid rgb(4, 28, 15)",
        }}
        value="boolean"
      >
        Boolean
      </option>
      <option
        style={{
          border: "0px solid white",
          cursor: "pointer",
          border: "1px solid rgb(4, 28, 15)",
        }}
        value="array"
      >
        Array
      </option>
      <option
        style={{
          border: "0px solid white",
          cursor: "pointer",
          border: "1px solid rgb(4, 28, 15)",
        }}
        value="object"
      >
        Object
      </option>
      <option
        style={{
          border: "0px solid white",
          cursor: "pointer",
          border: "1px solid rgb(4, 28, 15)",
        }}
        value="date"
      >
        Date
      </option>
    </select>
  );
}
