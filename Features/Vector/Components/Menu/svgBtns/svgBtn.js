import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Svg.module.css";

import svgPaths from "./svgPaths";

export default function SVG(props) {
  const dispatch = useDispatch();

  const shapeSelected = useSelector((state) => state.shapeSelected);
  const elemSelected = useSelector((state) => state.elemSelected);

  const condition =
    props.id === "Back"
      ? elemSelected === "Svg-0" && props.id === shapeSelected
      : props.id === shapeSelected;

  const clickHandler = () => {
    dispatch({ type: "SELECT_SHAPE", payload: props.id });
    console.log(props.id);
    if (props.id === "Back") {
      console.log("Svg-0 got selected");
      dispatch({ type: "SELECT_ELEM", payload: "Svg-0" });
    }
  };

  const toolTip = {
    Circle: "Add a Circle",
    Square: "Add a Square",
    Cursor: "Add a Sharp Edged Shape",
    Pen: "Add a Curvy Shape",
    Back: "Select Background",
    Export: "Download SVG",
    List: "Show Components",
    Edit: "Edit Component",
    Colors: "Edit Colors",
    Help: "How To Use Vector Plus"
  };

  const classApplied = condition
    ? styles["control-icon-active"]
    : styles["control-icon"];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || "30"}
      height={props.size || "30"}
      viewBox={props.viewBox || "0 0 24 24"}
      id={props.id}
      onClick={props.clickHandler || clickHandler}
      fill="white"
      className={classApplied}
      style={props.style}
    >
      <title>{toolTip[props.id]}</title>

      {svgPaths[props.id]}
    </svg>
  );
}
