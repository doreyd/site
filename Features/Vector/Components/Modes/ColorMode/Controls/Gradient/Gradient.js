import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Color.module.css";

import FillBtn from "./Btns/FillBtn";
import StrokeBtn from "./Btns/StrokeBtn";
import LinearGradientBtn from "./Btns/LinearGradientBtn";
import RadialGradientBtn from "./Btns/RadialGradientBtn";
import NoGradientBtn from "./Btns/NoGradientBtn";

import LinearGradient from ".//LinearGradient/LinearGradient";
import RadialGradient from "./RadialGradient/RadialGradient";
import NoGradient from "./NoGradient/NoGradient";

export default function ColorPicked(props) {
  const dispatch = useDispatch();

  const gradient = useSelector((state) => state.gradient);
  const strokeGradient = useSelector((state) => state.strokeGradient);

  const elemsState = useSelector((state) => state.elemsState);
  const elemSelected = useSelector((state) => state.elemSelected);
  const fillMode = elemsState[elemSelected]
    ? elemsState[elemSelected]["fillMode"]
    : "";

  const strokegradient = elemsState[elemSelected]
    ? elemsState[elemSelected]["strokegradient"]
    : "";
  const fillgradient = elemsState[elemSelected]
    ? elemsState[elemSelected]["fillgradient"]
    : "";

  const { linearfill, radialfill, linearstroke, radialstroke, fill, stroke } =
    elemsState[elemSelected] ? elemsState[elemSelected] : {};

  const target = fillMode;

  const { linearFillID, radialFillID, linearStrokeID, radialStrokeID } =
    elemsState[elemSelected] ? elemsState[elemSelected] : {};

  const gradients = useSelector((state) => state.gradients);

  const setGradient = (value) => {
    dispatch({
      type: "SET_PROP",
      payload: {
        id: elemSelected,
        field: fillMode === "fill" ? "fillgradient" : "strokegradient",
        value: value,
      },
    });
  };

  const setTarget = (value) => {
    dispatch({
      type: "SET_PROP",
      payload: {
        id: elemSelected,
        field: "fillMode",
        value: value,
      },
    });
  };

  let currentGradient = fillMode === "fill" ? fillgradient : strokegradient;

  // const linearData = fillMode === "fill" ? linearfill : linearstroke;
  // const radialData = fillMode === "fill" ? radialfill : radialstroke;

  const linearData =
    gradients[fillMode === "fill" ? linearFillID : linearStrokeID];
  const radialData =
    gradients[fillMode === "fill" ? radialFillID : radialStrokeID];

  return (
    <div className={styles["gradient"]}>
      <div className={styles["gradient-line"]}>
        <FillBtn target={target} setTarget={setTarget} />
        <StrokeBtn target={target} setTarget={setTarget} />
      </div>
      <div className={styles["gradient-line"]}>
        <LinearGradientBtn
          target={target}
          currentGradient={currentGradient}
          setGradient={setGradient}
          gradient={gradient}
          strokeGradient={strokeGradient}
        />
        <RadialGradientBtn
          target={target}
          currentGradient={currentGradient}
          setGradient={setGradient}
          gradient={gradient}
          strokeGradient={strokeGradient}
        />
        <NoGradientBtn
          target={target}
          currentGradient={currentGradient}
          setGradient={setGradient}
          gradient={gradient}
          strokeGradient={strokeGradient}
        />
      </div>

      {currentGradient === "linear" && (
        <LinearGradient linearData={linearData} fillMode={fillMode} />
      )}
      {currentGradient === "radial" && (
        <RadialGradient radialData={radialData} fillMode={fillMode} />
      )}
      {currentGradient === "none" && (
        <NoGradient fillMode={fillMode} fill={fill} stroke={stroke} />
      )}
    </div>
  );
}
