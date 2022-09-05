import React, { useRef, Fragment } from "react";
import useUpdateElement from "../Hooks/useUpdateElement";
import useGradient from "../Hooks/useGradient";

export default function Text(props) {
  const dotRef = useRef();

  const { elemsState, updateDrag, selectElement } = useUpdateElement(
    dotRef,
    props
  );

  const { fillID, strokeID, opacity, angle } = useGradient(
    elemsState,
    props.id
  );

  const { x, y } = elemsState[props.id] ? elemsState[props.id] : {};

  return (
    <Fragment>
      <svg>
        <text
          draggable={true}
          ref={dotRef}
          onClick={selectElement}
          onMouseOver={updateDrag}
          key={props.id}
          {...elemsState[props.id]}
          style={{
            opacity: opacity,
            fontSize: "4rem",
            border: "2px solid black",
          }}
          fill={fillID}
          stroke={strokeID}
        >
          text
        </text>
      </svg>
    </Fragment>
  );
}
