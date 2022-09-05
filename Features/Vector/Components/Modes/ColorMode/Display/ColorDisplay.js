import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ColorDisplay.module.css";

export default function ColorDisplay(props) {
  const dispatch = useDispatch();
  const shades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const { hue, saturation, lightness } = useSelector((state) => state);

  const pickShade = (shade) => {
    dispatch({
      type: "SET_COLOR_PROP",
      payload: { field: "saturation", value: 100 },
    });
    dispatch({
      type: "SET_COLOR_PROP",
      payload: { field: "lightness", value: shade },
    });
  };

  return (
    <Fragment>
      <div
        className={styles["color-display"]}
        style={{
          background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        }}
      ></div>
      <div className={styles["color-shades"]}>
        {shades.map((shade) => {
          return (
            <div key={shade}
              onClick={pickShade.bind(null, shade * 5)}
              className={styles["shade"]}
              style={{ background: `hsl(${hue}, 100%, ${shade * 5}%)` }}
            />
          );
        })}
      </div>
    </Fragment>
  );
}
