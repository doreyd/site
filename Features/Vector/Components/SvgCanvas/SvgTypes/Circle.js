import React, { useRef, Fragment } from "react";
import useUpdateElement from "../Hooks/useUpdateElement";
import useGradient from "../Hooks/useGradient";

export default function Circle(props) {
  const dotRef = useRef();

  const { elemsState, updateDrag, selectElement } = useUpdateElement(
    dotRef,
    props
  );

  const { fillID, strokeID, opacity, angle } = useGradient(
    elemsState,
    props.id
  );

  const { cx, cy } = elemsState[props.id] ? elemsState[props.id] : {};
  return (
    <Fragment>
      <svg>
        <ellipse
          draggable={true}
          ref={dotRef}
          onClick={selectElement}
          onMouseOver={updateDrag}
          key={props.id}
          {...elemsState[props.id]}
          style={{
            opacity: opacity,
            transform: `rotate(${angle}deg)`,
            transformOrigin: `${cx}px ${cy}px`,
          }}
          fill={fillID}
          stroke={strokeID}
        />
      </svg>
    </Fragment>
  );
}
