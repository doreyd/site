import React from "react";

export default function Option(props) {
  return (
    <option
      style={{
        border: "0px solid white",
        cursor: "pointer",
        border: "1px solid rgb(4, 28, 15)",
      }}
      value={props.value.toLowerCase()}
    >
      {props.value}
    </option>
  );
}
