import { useSelector, useDispatch } from "react-redux";
import dragFocals from "./dragFocals";

export default function useDragFocals(sqRef, props, type) {
  const dispatch = useDispatch();
  const elemsState = useSelector((state) => state.elemsState);

  const moveUpdater = (elem, X2, Y2, index) => {
    const { widthRatio, heightRatio } = props.getRatios();

    if (props.fx === "fx1") {
      return {
        id: elem.id,
        index: index,
        fx:"fx1",
        fy1: (elem.getAttribute("cy") * widthRatio - Y2) / widthRatio,
        fx1: (elem.getAttribute("cx") * heightRatio - X2) / heightRatio,
      };
    } else {
      return {
        id: elem.id,
        index: index,
        fx:"fx2",
        fy2: (elem.getAttribute("cy") * widthRatio - Y2) / widthRatio,
        fx2: (elem.getAttribute("cx") * heightRatio - X2) / heightRatio,
      };
    }
  };

  const updateDrag = () => {
    const elem = sqRef.current;
    dispatch({type: "SELECT_SHAPE", payload:type})
    dragFocals(elem, dispatch, moveUpdater, props.index);
  };

  const selectElement = () => {
    dispatch({ type: "SELECT_ELEM", payload: props.id });
  };

  return {
    elemsState,
    updateDrag,
    selectElement,
  };
}
