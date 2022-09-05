import React from "react";
import { useDispatch } from "react-redux";
import styles from "./TopIcons.module.css";

export default function Show() {
  const dispatch = useDispatch();

  const clickHandler = () =>
    dispatch({ type: "CONTROL_MODE", payload: "show" });

  return (
    <div onClick={clickHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className={styles.icon}
      >
        <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
      </svg>
    </div>
  );
}
