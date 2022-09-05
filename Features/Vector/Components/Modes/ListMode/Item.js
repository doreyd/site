import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./List.module.css";
import dragReorder from "./dragReorder";
import EyeSVG from "./EyeSVG";

export default function Item(props) {
  const dispatch = useDispatch();
  const itemRef = useRef();

  const { elemSelected, elemsState } = useSelector((state) => state);

  const moveItem = (e) => {
    dragReorder(itemRef.current, props.id, dispatch, props.index, props.length);
  };

  const toggleDisplay = (id) => {
    let opacity = elemsState[id]["opacity"];
    let newOpacity = opacity === 0 ? 1 : 0;
    dispatch({
      type: "SET_PROP",
      payload: {
        id: id,
        field: "opacity",
        value: newOpacity,
      },
    });
  };

  const nameDisplayed = (id) => {
    let [name, num] = id.split("-");
    if (name === "Cursor") return "EdgedShape-" + num;
    else if (name === "Pen") return "CurvyShape-" + num;
    return id;
  };

  const isHidden = elemsState[props.id]["opacity"] === 0;

  const appliedClass =
    elemSelected === props.id
      ? styles["list-item-selected"]
      : styles["list-item"];

  console.log(elemsState[props.id]);

  const colorStyle = isHidden ? { color: "rgb(56, 57, 63)" } : {};
  return (
    <li
      id={props.id}
      draggable={true}
      ref={itemRef}
      onMouseOver={moveItem}
      className={appliedClass}
      style={colorStyle}
    >
      {nameDisplayed(elemsState[props.id]["name"])}

      <EyeSVG
        toggleDisplay={toggleDisplay.bind(this, props.id)}
        isHidden={isHidden}
      />
    </li>
  );
}
