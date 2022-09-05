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
  const setColor = () => {
    dispatch({ type: "APPLY_COLOR" });
  };

  const setColorToTransparent = () => {
    dispatch({ type: "APPLY_COLOR", payload: { transparent: true } });
  };

  const gradient = useSelector((state) => state.gradient);
  const strokeGradient = useSelector((state) => state.strokeGradient);
  const target = useSelector((state) => state.target);

  const setGradient = (id) => {
    dispatch({
      type: "SET_COLOR_PROP",
      payload: {
        field: target === "fill" ? "gradient" : "strokeGradient",
        value: id,
      },
    });
  };

  const setTarget = (id) => {
    dispatch({
      type: "SET_COLOR_PROP",
      payload: { field: "target", value: id },
    });
  };

  let currentGradient = "none";
  if (
    (target === "fill" && gradient === "linear") ||
    (target === "stroke" && strokeGradient === "linear")
  ) {
    currentGradient = "linGrad";
  } else if (
    (target === "fill" && gradient === "radial") ||
    (target === "stroke" && strokeGradient === "radial")
  ) {
    currentGradient = "radGrad";
  }

  const gradData = useSelector((state) => state[currentGradient]);

  return (
    <div className={styles["gradient"]}>
      <div className={styles["gradient-line"]}>
        <FillBtn target={target} setTarget={setTarget} />
        <StrokeBtn target={target} setTarget={setTarget} />
      </div>
      <div className={styles["gradient-line"]}>
        <LinearGradientBtn
          target={target}
          setGradient={setGradient}
          gradient={gradient}
          strokeGradient={strokeGradient}
        />
        <RadialGradientBtn
          target={target}
          setGradient={setGradient}
          gradient={gradient}
          strokeGradient={strokeGradient}
        />
        <NoGradientBtn
          target={target}
          setGradient={setGradient}
          gradient={gradient}
          strokeGradient={strokeGradient}
        />
      </div>

      {currentGradient === "linGrad" && <LinearGradient gradData={gradData} />}
      {currentGradient === "radGrad" && <RadialGradient gradData={gradData} />}
      {currentGradient === "none" && <NoGradient />}
    </div>
  );
}
