import React, { useRef, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import useUpdateElement from "../../Hooks/useUpdateElement";
import useGradient from "../../Hooks/useGradient";

import Dot from "./Dot";

export default function Circle(props) {
  const cursorRef = useRef();

  const { elemsState, updateDrag, selectElement } = useUpdateElement(
    cursorRef,
    props,
    "Cursor"
  );

  const dispatch = useDispatch();
  const polyDotSelected = useSelector((state) => state.polyDotSelected);

  const showDots = () => {
    const selection = polyDotSelected === props.id ? "" : props.id;
    dispatch({ type: "SET_CURSOR", payload: selection });
  };

  const { fillID, strokeID, opacity, angle } = useGradient(
    elemsState,
    props.id
  );

  const rescaling = (x, y, x0, y0, lambda) => {
    let newX = x0 + (x - x0) * lambda;
    let newY = y0 + (y - y0) * lambda;

    return { x: newX, y: newY };
  };

  const rotating = (x, y, x0, y0, alpha) => {
    let newAlpha = (alpha * Math.PI) / 180;

    let newX =
      x0 + (x - x0) * Math.cos(newAlpha) - (y - y0) * Math.sin(newAlpha);
    let newY =
      y0 + (x - x0) * Math.sin(newAlpha) + (y - y0) * Math.cos(newAlpha);
    return { x: newX, y: newY };
  };

  let newDots = elemsState[props.id]["dots"].map((dot, index) => {
    if (index === 0) {
      return { x: dot.x, y: dot.y };
    }
    return rotating(
      dot.x,
      dot.y,
      elemsState[props.id]["dots"][0]["x"],
      elemsState[props.id]["dots"][0]["y"],
      elemsState[props.id]["angle"]
    );
  });

  newDots = newDots.map((dot, index) => {
    if (index === 0) {
      return { x: dot.x, y: dot.y };
    }
    return rescaling(
      dot.x,
      dot.y,
      newDots[0]["x"],
      newDots[0]["y"],
      elemsState[props.id]["scale"]
    );
  });

  let newD =
    "M " +
    newDots.map((dot) => {
      return `${dot.x} ${dot.y} `;
    });
  newD = newD + " Z";

  return (
    <Fragment>
      <svg
        x={elemsState[props.id]["x"]}
        y={elemsState[props.id]["y"]}
        onClick={selectElement}
        onMouseOver={updateDrag}
        onDoubleClick={showDots}
        key={props.id}
        {...elemsState[props.id]}
        draggable={true}
        ref={cursorRef}
        overflow="visible"
      >
        <path
          {...elemsState[props.id]}
          dots={elemsState[props.id]["dots"]}
          // d={elemsState[props.id]["d"]}
          d={newD}
          style={{
            opacity: opacity,
          }}
          fill={fillID}
          stroke={strokeID}
        />
      </svg>
      {polyDotSelected === props.id &&
        newDots.map((dot, index) => {
          return (
            <Dot
              cursorRef={cursorRef}
              index={index}
              id={props.id}
              getRatios={props.getRatios}
              svgElem={props.svgElem}
              cx={dot.x + elemsState[props.id]["x"]}
              cy={dot.y + elemsState[props.id]["y"]}
            />
          );
        })}
    </Fragment>
  );
}
