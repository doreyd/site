import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function useChangeDimensions(props) {
  const [scalingType, setScalingType] = useState("equally");

  const dispatch = useDispatch();
  const elemsState = useSelector((state) => state.elemsState);
  const elemSelected = useSelector((state) => state.elemSelected);

  const elemType = elemsState[elemSelected]
    ? elemsState[elemSelected]["type"]
    : "other";

  const [horiz, vert] =
    elemType === "Circle" ? ["rx", "ry"] : ["width", "height"];

  const currentValue = elemsState[elemSelected]
    ? parseFloat(elemsState[elemSelected][horiz]).toFixed(2)
    : "";

  const changeWidth = (e) => {
    dispatch({
      type: "UPDATE_PROP",
      payload: {
        id: elemSelected,
        name: horiz,
        value: e.target.value,
      },
    });
    if (scalingType !== "seperately") {
      dispatch({
        type: "UPDATE_PROP",
        payload: {
          id: elemSelected,
          name: vert,
          value:
            scalingType === "equally"
              ? e.target.value
              : (elemsState[elemSelected][vert] * e.target.value) /
                elemsState[elemSelected][horiz],
        },
      });
    }
  };

  const changeHeight = (e) => {
    dispatch({
      type: "UPDATE_PROP",
      payload: {
        id: elemSelected,
        name: vert,
        value: e.target.value,
      },
    });
    if (scalingType !== "seperately") {
      dispatch({
        type: "UPDATE_PROP",
        payload: {
          id: elemSelected,
          name: horiz,
          value:
            scalingType === "equally"
              ? e.target.value
              : (elemsState[elemSelected][horiz] * e.target.value) /
                elemsState[elemSelected][vert],
        },
      });
    }
  };

  return {
    elemType,
    scalingType,
    setScalingType,
    changeWidth,
    changeHeight,
  };
}
