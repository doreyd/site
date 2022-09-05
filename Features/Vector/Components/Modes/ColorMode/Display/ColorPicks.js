import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ColorDisplay.module.css";

export default function ColorDisplay(props) {
  const dispatch = useDispatch();
  const colors = [
    ["hsl(0, 0%, 0%)", [0, 0, 0]],
    ["hsl(0, 100%, 25%)", [0, 100, 25]],
    ["hsl(300, 100%, 50%)", [300, 100, 50]],
    ["hsl(300, 100%, 25%)", [300, 100, 25]],
    ["hsl(240, 100%, 25%)", [240, 100, 25]],
    ["hsl(0, 0%, 50%)", [0, 0, 50]],
    ["hsl(0, 0%, 75%)", [0, 0, 75]],
    ["hsl(124, 100%, 25%)", [124, 100, 25]],
    ["hsl(219, 100%, 40%)", [219, 100, 40]],
    ["hsl(60, 100%, 25%)", [60, 100, 25]],
    ["hsl(11, 100%, 60%)", [11, 100, 60]],
    ["hsl(318, 57%, 22%)", [318, 57, 22]],
    ["hsl(46, 100%, 50%)", [46, 100, 50]],
    ["hsl(28, 60%, 64%)", [28, 60, 64]],
    ["hsl(81, 84%, 81%)", [81, 84, 81]],
    ["	hsl(0, 0%, 100%)", [0, 0, 100]],
  ];

  const pickColor = (color) => {
    dispatch({
      type: "SET_COLOR_PROP",
      payload: { field: "hue", value: color[0] },
    });
    dispatch({
      type: "SET_COLOR_PROP",
      payload: { field: "saturation", value: color[1] },
    });
    dispatch({
      type: "SET_COLOR_PROP",
      payload: { field: "lightness", value: color[2] },
    });
  };

  return (
    <div className={styles["color-shades"]}>
      {colors.map((color) => {
        return (
          <div
            key={color[0]}
            onClick={pickColor.bind(null, color[1])}
            className={styles["shade"]}
            style={{ background: color[0] }}
          />
        );
      })}
    </div>
  );
}
