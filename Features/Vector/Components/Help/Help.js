import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Help.module.css";

export default function Help() {
  const dispatch = useDispatch();

  const hideHelp = (e) => {
    e.stopPropagation();
    dispatch({ type: "HIDE_HELP" });
  };

  const stopProp = (e) => e.stopPropagation();

  return (
    <div className={styles.wrapper} onClick={hideHelp}>
      <div className={styles.help} onClick={stopProp}>
        <div className={styles.title}>Welcome to Vector Plus</div>
        <svg viewBox="0 0 48 48" className={styles.close} onClick={hideHelp}>
          <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
        </svg>
        <div className={styles.question}>To Create a new shape:</div>
        <div className={styles.answer}>
          - First click on the appropriate icon at the top.
          <br />- Then "Left-Click" on the canvas.
          <br />- You can drag and drop any component to reposition it.
          <br />- You can also reshape "EdgedShapes" and "CurvyShapes" by moving
          the edge-dots around
          <br />- To Hide or Show edge-dots for "EdgedShapes" and "CurvyShapes",
          just double click on the shape
        </div>
        <div className={styles.question}>To modify a shape:</div>
        <div className={styles.answer}>
          You can do that by selecting one of the three editing modes to the
          top-right of the window.
          <br />
          <span style={{ fontWeight: "bold" }}>- ShowComponents:</span>
          <br /> will allow you to change the order of the components.
          <br />
          <span style={{ fontWeight: "bold" }}>- Edit:</span>
          <br />
          will allow you to resize, rename or delete element
          <br />
          <span style={{ fontWeight: "bold" }}>- Colors:</span>
          <br />
          will allow you to change background color, border color, or apply
          gradient to either one of them
        </div>
        <div className={styles.question}>To download your finished work:</div>
        <div className={styles.answer}>
          Just click on the cloud shaped Icon. Enjoy!
        </div>
      </div>
    </div>
  );
}
