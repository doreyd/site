import React from "react";

import { useSelector, useDispatch } from "react-redux";
import styles from "./Color.module.css";

import { hslToHex } from "./convertColor";
import { hexToHsl } from "./convertColor";
import { convertColor } from "./convertColor";

export default function ColorPicked(props) {
  const { hue, saturation, lightness } = useSelector((state) => state);

  const dispatch = useDispatch();
  // console.log(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
  // console.log(hslToHex(`hsl(${hue}, ${saturation}%, ${lightness}%)`));

  // console.log(hexToHsl(hslToHex(`hsl(${hue}, ${saturation}%, ${lightness}%)`)));

  const hex = hslToHex(`hsl(${hue}, ${saturation}%, ${lightness}%)`);

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(hex);
  };

  const onChangeHandler = (e) => {
    const { H, S, L } = convertColor(e.target.value);
    dispatch({
      type: "SET_COLOR_PROP",
      payload: { field: "hue", value: H },
    });
    dispatch({
      type: "SET_COLOR_PROP",
      payload: { field: saturation, value: S },
    });
    dispatch({
      type: "SET_COLOR_PROP",
      payload: { field: "lightness", value: L },
    });
  };

  return (
    <div
      className={styles["prop-category-color"]}
      title="Click to copy to clipboard"
    >
      <span onClick={copyToClipBoard}> COLOR PICKED : {hex}</span>{" "}
      <input
        type="text"
        spellCheck={false}
        className={styles["prop-edit"]}
        onBlur={onChangeHandler}
      />
    </div>
  );
}
