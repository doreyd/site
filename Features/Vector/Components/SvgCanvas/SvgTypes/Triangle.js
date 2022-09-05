import React, { useEffect, useRef } from "react";
import useUpdateElement from "../Hooks/useUpdateElement";
import useGradient from "../Hooks/useGradient";

export default function Triangle(props) {
  const triangleRef = useRef();

  const { elemsState, updateDrag, selectElement } = useUpdateElement(
    triangleRef,
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
    <svg
      draggable={true}
      ref={triangleRef}
      onClick={selectElement}
      onMouseOver={updateDrag}
      viewBox="-4 -4 24 24"
      height="26"
      width="26"
      overflow="visible"
      {...elemsState[props.id]}
      style={{ background: "red" }}
    >
      <path
        fill={fillID}
        stroke={strokeID}
        style={{ opacity: opacity }}
        transform={`rotate(${angle})`}
        transformOrigin={`${x + width} ${y + height}`}
        xmlns="http://www.w3.org/2000/svg"
        d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
      />
    </svg>
  );
}
