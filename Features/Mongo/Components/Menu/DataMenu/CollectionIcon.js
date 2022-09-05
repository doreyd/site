import React, { useState } from "react";
import styles from "./DataMenu.module.css";

import { useDispatch, useSelector } from "react-redux";

export default function DatabaseIcon(props) {
  const { collectionSelected, app } = useSelector((state) => state);

  const [color, setColor] = useState(props.color1 || "rgb(37,37,37");
  const dispatch = useDispatch();
  const mouseOverHandler = () => {
    setColor(props.color2 || "green");
  };
  const mouseOutHandler = () => {
    setColor(props.color1 || "rgb(37,37,37");
  };
  const onClick = () => {
    dispatch({ type: "TOGGLE_COLLECTION_MENU" });
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
        <path d="M41 41.95H9q-1.2 0-2.1-.9-.9-.9-.9-2.1V9q0-1.2.9-2.1Q7.8 6 9 6h32q1.2 0 2.1.9.9.9.9 2.1v29.95q0 1.2-.9 2.1-.9.9-2.1.9ZM9 16.05h32V9H9Zm7.5 3H9v19.9h7.5Zm17 0v19.9H41v-19.9Zm-3 0h-11v19.9h11Z" />
      </svg>
      <div className={styles["icon-text"]} style={{ color: color }}>
        {collectionSelected}
      </div>
    </div>
  );
}
