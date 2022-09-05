import React, { useRef, Fragment, useEffect, useState } from "react";

import styles from "./Dot.module.css";
import useDragFocals from "./useDragFocals";

export default function Focals(props) {
  const focalRef = useRef();
  // const [newData, setNewData] = useState({ x: 0, y: 0 });
  const { elemsState, updateDrag, selectElement } = useDragFocals(
    focalRef,
    props,
    "Pen"
  );

  const data = elemsState[props.id]["dots"][props.index];
  const length = elemsState[props.id]["dots"].length;
  const { angle, scale } = elemsState[props.id];
  // console.log({ angle, scale });

  const firstPoint = elemsState[props.id]["dots"][0];

  const newScaleX = firstPoint.x + (data.x - firstPoint.x) * scale;
  const newScaleY = firstPoint.y + (data.y - firstPoint.y) * scale;

  const rotate = (firstPointX, firstPointY, X0, Y0) => {
    // if (index === 0) {
    //   return { x: X0, y: Y0 };
    // }
    const deltaX0 = X0 - firstPointX;
    const deltaY0 = Y0 - firstPointY;
    let oldAngle = (Math.atan(deltaY0 / deltaX0) * 180) / Math.PI;

    // console.log("oldAngle : " + oldAngle);

    const newAngle = ((oldAngle + parseFloat(angle)) * Math.PI) / 180;

    // console.log("new angle: ");
    // console.log(oldAngle + parseFloat(angle));

    let coeff = deltaX0 < 0 ? -1 : 1;

    const y =
      coeff *
        Math.sin(newAngle) *
        Math.sqrt(deltaX0 * deltaX0 + deltaY0 * deltaY0) +
      firstPointY;
    const x =
      coeff *
        Math.cos(newAngle) *
        Math.sqrt(deltaX0 * deltaX0 + deltaY0 * deltaY0) +
      firstPointX;

    if (props.index === 0) {
      return { x: firstPointX, y: firstPointY };
    }
    return { x, y };
  };

  const { x, y } = rotate(firstPoint.x, firstPoint.y, newScaleX, newScaleY);

  const newTranslateX = x + elemsState[props.id].x;
  const newTranslateY = y + elemsState[props.id].y;

  // get X and Y distances

  // const newRotateX = newScaleX + elemsState[props.id].x;
  // const newRotateY = newScaleY + elemsState[props.id].y;

  // console.log(elemsState[props.id]);
  if (length === 1) {
    return null;
  }
  return (
    <Fragment>
      <line
        x1={props.cx}
        y1={props.cy}
        x2={newTranslateX}
        y2={newTranslateY}
        stroke="royalblue"
      />
      <circle
        ref={focalRef}
        onClick={selectElement}
        onMouseOver={updateDrag}
        draggable={true}
        cx={props.cx}
        cy={props.cy}
        r="5"
        // fill={props.fill ? props.fill : "green"}
        fill="royalblue"
        className={styles["dot"]}
      />
    </Fragment>
  );
}
