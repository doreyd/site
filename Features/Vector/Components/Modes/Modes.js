import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Editing.module.css";

import EditMode from "./EditMode/EditMode";
import ListMode from "./ListMode/ListMode";
import ColorMode from "./ColorMode/ColorMode";

import LayersSVG from "../../SVG/Layers";
import EditSVG from "../../SVG/Edit";
import ColorSVG from "../../SVG/ColorSVG";

import SVG from "../Menu/svgBtns/svgBtn";

export default function Modes(props) {
  const modeSelected = useSelector((state) => state.modeSelected);
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch({ type: "CHANGE_MODE", payload: id });
  };

  return (
    <div className={styles["mode-control-container"]}>
      <div className={styles.mode}>
        {/* <LayersSVG
          clickHandler={clickHandler.bind(null, "list")}
          id="List"
          size="30"
          fill="white"
          className={styles["control-icon"]}
        />
        <EditSVG
          clickHandler={clickHandler.bind(null, "edit")}
          size="30"
          id="Edit"
          fill="white"
          className={styles["control-icon"]}
        />
        <ColorSVG
          clickHandler={clickHandler.bind(null, "colors")}
          size="32"
          id="Colors"
          fill="white"
          className={styles["control-icon"]}
        /> */}

        <SVG
          clickHandler={clickHandler.bind(null, "list")}
          id="List"
          size="30"
          fill="white"
          viewBox="0 0 24 24"
          className={styles["control-icon"]}
        />
        <SVG
          clickHandler={clickHandler.bind(null, "edit")}
          size="30"
          id="Edit"
          fill="white"
          viewBox="0 0 24 24"
          className={styles["control-icon"]}
        />
        <SVG
          clickHandler={clickHandler.bind(null, "colors")}
          size="32"
          id="Colors"
          fill="white"
          viewBox="0 0 16 16"
          className={styles["control-icon"]}
        />
      </div>
      {modeSelected === "edit" && <EditMode />}
      {modeSelected === "list" && <ListMode />}
      {modeSelected === "colors" && <ColorMode />}
    </div>
  );
}
