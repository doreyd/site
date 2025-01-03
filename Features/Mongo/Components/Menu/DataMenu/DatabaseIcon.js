import React, { useState } from "react";
import styles from "./DataMenu.module.css";
import { useSelector, useDispatch } from "react-redux";

export default function DatabaseIcon(props) {
  const [color, setColor] = useState(props.color1 || "rgb(37,37,37");

  const databaseSelected = useSelector((state) => state.databaseSelected);

  const dispatch = useDispatch();

  const mouseOverHandler = () => {
    setColor(props.color2 || "green");
  };
  const mouseOutHandler = () => {
    setColor(props.color1 || "rgb(37,37,37");
  };
  const onClick = () => {
    dispatch({ type: "TOGGLE_DATABASE_MENU" });
  };
  return (
    <div>
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
          <path d="M24 22q-8.05 0-13.025-2.45T6 14q0-3.15 4.975-5.575Q15.95 6 24 6t13.025 2.425Q42 10.85 42 14q0 3.1-4.975 5.55Q32.05 22 24 22Zm0 10q-7.3 0-12.65-2.2Q6 27.6 6 24.5v-5q0 1.95 1.875 3.375t4.65 2.35q2.775.925 5.9 1.35Q21.55 27 24 27q2.5 0 5.6-.425 3.1-.425 5.875-1.325 2.775-.9 4.65-2.325Q42 21.5 42 19.5v5q0 3.1-5.35 5.3Q31.3 32 24 32Zm0 10q-7.3 0-12.65-2.2Q6 37.6 6 34.5v-5q0 1.95 1.875 3.375t4.65 2.35q2.775.925 5.9 1.35Q21.55 37 24 37q2.5 0 5.6-.425 3.1-.425 5.875-1.325 2.775-.9 4.65-2.325Q42 31.5 42 29.5v5q0 3.1-5.35 5.3Q31.3 42 24 42Z" />
        </svg>
        <div className={styles["icon-text"]} style={{ color: color }}>
          {databaseSelected}
        </div>
      </div>
    </div>
  );
}
