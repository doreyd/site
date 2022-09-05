import React, { useState } from "react";
import styles from "./DataMenu.module.css";
import { useSelector, useDispatch } from "react-redux";

export default function DocumentIcon(props) {
  const dispatch = useDispatch();

  const [color, setColor] = useState("rgb(37,37,37");
  const mouseOverHandler = () => {
    setColor(props.color2 || "green");
  };
  const mouseOutHandler = () => {
    setColor(props.color1|| "rgb(37,37,37");
  };
  const onClick = () => {
    dispatch({ type: "TOGGLE_DOCUMENT_MENU" });
  };
  return (
    <div
      className={styles["icon-wrapper"]}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className={styles.icon}
        fill={color}
      >
        <path d="M11 44q-1.2 0-2.1-.9Q8 42.2 8 41V7q0-1.2.9-2.1Q9.8 4 11 4h18.05L40 14.95V41q0 1.2-.9 2.1-.9.9-2.1.9Zm16.55-27.7V7H11v34h26V16.3ZM11 7v9.3V7v34V7Z" />
      </svg>
      <div className={styles["icon-text"]} style={{ color: color }}>
        documents
      </div>
    </div>
  );
}
