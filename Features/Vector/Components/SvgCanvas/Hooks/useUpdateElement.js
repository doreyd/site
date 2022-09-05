import { useSelector, useDispatch } from "react-redux";
import dragElement from "../lib/dragElement";

export default function useUpdateElement(sqRef, props, type) {
  const dispatch = useDispatch();
  const elemsState = useSelector((state) => state.elemsState);



  const moveUpdater = (elem, X2, Y2) => {

    const { widthRatio, heightRatio } = props.getRatios();
    if (props.type === "Circle") {
      return {
        id: elem.id,
        cy: (elem.getAttribute("cy") * widthRatio - Y2) / widthRatio,
        cx: (elem.getAttribute("cx") * heightRatio - X2) / heightRatio,
      };
    }

    return {
      id: elem.id,
      y: (elem.getAttribute("y") * widthRatio - Y2) / widthRatio,
      x: (elem.getAttribute("x") * heightRatio - X2) / heightRatio,
    };
  };

  const updateDrag = () => {
    // dispatch({type: "SELECT_SHAPE", payload:type})
    const elem = sqRef.current;
    dragElement(elem, dispatch, moveUpdater);
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
