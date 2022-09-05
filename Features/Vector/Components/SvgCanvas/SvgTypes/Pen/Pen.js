import React, { useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import useUpdateElement from "../../Hooks/useUpdateElement";
import useGradient from "../../Hooks/useGradient";
import pathGenerator from "./pathGenerator";

import Dot from "./Dot";
import Focals from "./Focals/Focals";

export default function Circle(props) {
  const cursorRef = useRef();

  const { elemsState, updateDrag, selectElement } = useUpdateElement(
    cursorRef,
    props,
    "Pen"
  );

  const dispatch = useDispatch();
  const penSelected = useSelector((state) => state.penSelected);

  const showDots = () => {
    const selection = penSelected === props.id ? "" : props.id;
    dispatch({ type: "SET_PEN", payload: selection });
  };

  const { fillID, strokeID, opacity, angle, scale } = useGradient(
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

  // console.log(elemsState[props.id]["dots"]);

  let newDots = elemsState[props.id]["dots"].map((dot, index) => {
    let { x, y } = rotating(
      dot.x,
      dot.y,
      elemsState[props.id]["dots"][0]["x"],
      elemsState[props.id]["dots"][0]["y"],
      elemsState[props.id]["angle"]
    );

    let focal1 = rotating(
      dot.fx1,
      dot.fy1,
      elemsState[props.id]["dots"][0]["x"],
      elemsState[props.id]["dots"][0]["y"],
      elemsState[props.id]["angle"]
    );
    let focal2 = rotating(
      dot.fx2,
      dot.fy2,
      elemsState[props.id]["dots"][0]["x"],
      elemsState[props.id]["dots"][0]["y"],
      elemsState[props.id]["angle"]
    );

    return { x, y, fx1: focal1.x, fy1: focal1.y, fx2: focal2.x, fy2: focal2.y };
  });

  newDots = newDots.map((dot, index) => {
    let { x, y } = rescaling(
      dot.x,
      dot.y,
      newDots[0]["x"],
      newDots[0]["y"],
      elemsState[props.id]["scale"]
    );

    let focal1 = rescaling(
      dot.fx1,
      dot.fy1,
      newDots[0]["x"],
      newDots[0]["y"],
      elemsState[props.id]["scale"]
    );
    let focal2 = rescaling(
      dot.fx2,
      dot.fy2,
      newDots[0]["x"],
      newDots[0]["y"],
      elemsState[props.id]["scale"]
    );

    return { x, y, fx1: focal1.x, fy1: focal1.y, fx2: focal2.x, fy2: focal2.y };
  });

  let newD = "";
  if (elemsState[props.id]["dots"].length > 1) {
    newD = pathGenerator(newDots);
  }

  return (
    <Fragment>
      <svg
        x={elemsState[props.id]["x"]}
        y={elemsState[props.id]["y"]}
        onClick={selectElement}
        onMouseOver={updateDrag}
        key={props.id}
        {...elemsState[props.id]}
        draggable={true}
        ref={cursorRef}
        onDoubleClick={showDots}
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
      {penSelected === props.id &&
        // elemsState[props.id]["dots"].map((dot, index) => {
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

      {penSelected === props.id &&
        // elemsState[props.id]["dots"].map((dot, index) => {
        newDots.map((dot, index) => {
          return (
            <Fragment>
              {" "}
              <Focals
                cursorRef={cursorRef}
                index={index}
                id={props.id}
                fill="orange"
                getRatios={props.getRatios}
                svgElem={props.svgElem}
                fx="fx1"
                cx={dot.fx1 + elemsState[props.id]["x"]}
                cy={dot.fy1 + elemsState[props.id]["y"]}
              />
              <Focals
                cursorRef={cursorRef}
                index={index}
                id={props.id}
                fill="purple"
                getRatios={props.getRatios}
                svgElem={props.svgElem}
                fx="fx2"
                cx={dot.fx2 + elemsState[props.id]["x"]}
                cy={dot.fy2 + elemsState[props.id]["y"]}
              />
            </Fragment>
          );
        })}
    </Fragment>
  );
}
