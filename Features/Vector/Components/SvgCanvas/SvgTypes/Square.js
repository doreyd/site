import React, { useRef, Fragment } from "react";
import useUpdateElement from "../Hooks/useUpdateElement";
import useGradient from "../Hooks/useGradient";

export default function Square(props) {
  const sqRef = useRef();

  const { elemsState, updateDrag, selectElement } = useUpdateElement(
    sqRef,
    props
  );

  const { fillID, strokeID, opacity, angle } = useGradient(
    elemsState,
    props.id
  );

  const { x, y, height, width } = elemsState[props.id]
    ? elemsState[props.id]
    : {};
  return (
    <Fragment>
      <rect
        draggable={true}
        ref={sqRef}
        onClick={selectElement}
        onMouseOver={updateDrag}
        {...elemsState[props.id]}
        style={{
          opacity: opacity,
          transform: `rotate(${angle}deg)`,
          transformOrigin: `${x + width / 2}px ${y + height / 2}px`,
        }}
        fill={fillID}
        stroke={strokeID}
      />
    </Fragment>
  );
}
