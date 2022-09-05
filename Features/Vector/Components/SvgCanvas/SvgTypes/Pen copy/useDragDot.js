import { useSelector, useDispatch } from "react-redux";
import dragDot from "./dragDot";

export default function useDragDot(sqRef, props, type) {
  const dispatch = useDispatch();
  const elemsState = useSelector((state) => state.elemsState);

  const moveUpdater = (elem, X2, Y2, index) => {
    const { widthRatio, heightRatio } = props.getRatios();

    return {
      id: elem.id,
      index: index,
      cy: (elem.getAttribute("cy") * widthRatio - Y2) / widthRatio,
      cx: (elem.getAttribute("cx") * heightRatio - X2) / heightRatio,
    };
  };

  const updateDrag = () => {
    const elem = sqRef.current;
    dispatch({type: "SELECT_SHAPE", payload:type})
    dragDot(elem, dispatch, moveUpdater, props.index, props.id);
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
