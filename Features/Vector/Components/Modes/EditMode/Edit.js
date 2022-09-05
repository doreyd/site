import { Fragment } from "react";

import styles from "./Edit.module.css";
import ScalingType from "./ScalingType";
import Rotate from "./Rotate";
import Rename from "./Rename";
import Delete from "./Delete";

import ScaleDots from "./ScaleDots";
import ScaleDimension from "./ScaleDimension";
import StrokeWidth from "./StrokeWidth";
import useChangeDimensions from "./useChangeDimensions";

export default function Edit(props) {
  const { elemType, scalingType, setScalingType, changeWidth, changeHeight } =
    useChangeDimensions();

  const condition = elemType === "Cursor" || elemType === "Pen";

  return (
    <div className={styles.edit}>
      <div className={styles["prop-container"]}>
        {condition && <ScaleDots />}
        {!condition && (
          <Fragment>
            <ScaleDimension
              changeHandler={changeHeight}
              name="Height"
              field={elemType === "Circle" ? "ry" : "height"}
            />
            <ScaleDimension
              changeHandler={changeWidth}
              name="Width"
              field={elemType === "Circle" ? "rx" : "width"}
            />
            <ScalingType
              scalingType={scalingType}
              setScalingType={setScalingType}
            />
          </Fragment>
        )}
        <StrokeWidth />
        <Rotate />
        <Rename />
        <Delete />
      </div>
    </div>
  );
}
