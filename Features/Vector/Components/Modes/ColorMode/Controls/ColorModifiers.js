import React from "react";
import styles from "./Color.module.css";
import Modifier from "./Modifier";
import OpacityModifier from "./OpacityModifier";

export default function ColorModifiers(props) {
  return (
    <div className={styles["color-controls"]}>
      <Modifier
        setValue={props.setHue}
        field="hue"
        value={props.hue}
        name="HUE"
        min={0}
        max={360}
      />

      <Modifier
        setValue={props.setSaturation}
        value={props.saturation}
        field="saturation"
        name="SATURATION"
        min={0}
        max={100}
      />
      <Modifier
        setValue={props.setLightness}
        value={props.lightness}
        name="LIGHTNESS"
        field="lightness"
        min={0}
        max={100}
      />
      <OpacityModifier
        setValue={props.setOpacity}
        value={props.opacity}
        name="OPACITY"
        field="opacity"
        min={0}
        max={100}
      />
    </div>
  );
}
