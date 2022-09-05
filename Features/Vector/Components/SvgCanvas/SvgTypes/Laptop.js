import React, { useRef, Fragment } from "react";
import useUpdateElement from "../Hooks/useUpdateElement";
import useGradient from "../Hooks/useGradient";

export default function Laptop(props) {
  const laptopRef = useRef();

  const { elemsState, updateDrag, selectElement } = useUpdateElement(
    laptopRef,
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        ref={laptopRef}
        onClick={selectElement}
        onMouseOver={updateDrag}
        {...elemsState[props.id]}
        overflow="visible"
        style={{
          opacity: opacity,
        }}
      >
        <path
          fill={fillID}
          stroke={strokeID}
          transform={`rotate(${angle})`}
          transformOrigin={`${x + width / 2} ${y + height / 2}`}
          d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"
        />
      </svg>
    </Fragment>
  );
}
