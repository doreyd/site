import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "../Color.module.css";
import LinearGradientHeader from "./LinearGradientHeader";
import OffSetLinear from "./OffSetLinear";

export default function LinearGradient(props) {
  const dispatch = useDispatch();

  const { hue, saturation, lightness, elemSelected } = useSelector(
    (state) => state
  );

  const elemsState = useSelector((state) => state.elemsState);

  const { linearFillID, radialFillID, linearStrokeID, radialStrokeID } =
    elemsState[elemSelected];

  const addOffset = () => {
    dispatch({
      type: "ADD_OFFSET",
      payload: {
        id: props.fillMode === "fill" ? linearFillID : linearStrokeID,
      },
    });
  };

  return (
    <Fragment>
      <LinearGradientHeader data={props.linearData} fillMode={props.fillMode} />
      {props.linearData &&
        props.linearData.offSets.map((data, index) => {
          return (
            <OffSetLinear
              key={index}
              data={data}
              index={index}
              linearData={props.linearData}
              fillMode={props.fillMode}
              color={data.stopColor}
              offset={data.offset}
              style={data.style}
            />
          );
        })}
      <div onClick={addOffset} className={styles["gradient-btn"]}>
        {" "}
        ADD OFFSET
      </div>
    </Fragment>
  );
}
