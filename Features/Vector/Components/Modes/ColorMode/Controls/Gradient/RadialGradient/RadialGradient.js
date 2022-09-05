import React, { Fragment } from "react";
import styles from "../Color.module.css";
import RadialGradientHeader from "./RadialGradientHeader";
import OffSetRadial from "./OffSetRadial";

export default function RadialGradient(props) {
  return (
    <Fragment>
      <RadialGradientHeader data={props.radialData} fillMode={props.fillMode} />
      {props.radialData &&
        props.radialData.offSets.map((data, index) => {
          return (
            <OffSetRadial
              key={index}
              data={data}
              index={index}
              radialData={props.radialData}
              fillMode={props.fillMode}
              offset={data.offset}
              color={data.stopColor}
              style={data.style}
            />
          );
        })}
      <div className={styles["gradient-btn"]}> ADD OFFSET</div>
    </Fragment>
  );
}
