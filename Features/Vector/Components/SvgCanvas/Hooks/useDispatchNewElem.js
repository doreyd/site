import { useSelector, useDispatch } from "react-redux";
import elemGenerator from "../lib/elemGenerator";

export default function useDispatchNewElem(svgRef) {
  const { height, width, background } = useSelector(
    (state) => state.elemsState
  )["Svg-0"];

  const elemsList = useSelector((state) => state.elemsList);

  const shapeSelected = useSelector((state) => state.shapeSelected);
  const elemsState = useSelector((state) => state.elemsState);

  const polyDotSelected = useSelector((state) => state.polyDotSelected);

  const penSelected = useSelector((state) => state.penSelected);

  const dispatch = useDispatch();

  const getRatios = (svgRef) => {
    let currentWidth = parseFloat(svgRef.current?.clientWidth);
    let currentHeight = parseFloat(svgRef.current?.clientHeight);
    return {
      widthRatio: currentWidth / width,
      heightRatio: currentHeight / height,
    };
  };

  const AddNewElement = (e) => {
    e.preventDefault();
    const rect = svgRef.current.getBoundingClientRect();
    const { widthRatio, heightRatio } = getRatios(svgRef);
    const newElem = elemGenerator[shapeSelected](
      (e.clientX - rect.left) / widthRatio,
      (e.clientY - rect.top) / heightRatio
    );

    const elemUpdated = (e) => {
      return {
        x: (e.clientX - rect.left) / widthRatio,
        y: (e.clientY - rect.top) / heightRatio,
      };
    };

    if (newElem.type === "Cursor") {
      if (polyDotSelected === "") {
        console.log("new polydot");
        dispatch({
          type: "SET_CURSOR",
          payload: newElem.id,
        });
        dispatch({
          type: "ADD_ELEM",
          payload: { ...newElem },
        });
      } else {
        console.log("updating polydot");
        dispatch({
          type: "UPDATE_POLYDOT",
          payload: { ...elemUpdated(e) },
        });
      }
    } else if (newElem.type === "Pen") {
      if (penSelected === "") {
        console.log("new pen");
        dispatch({
          type: "SET_PEN",
          payload: newElem.id,
        });
        dispatch({
          type: "ADD_ELEM",
          payload: { ...newElem },
        });
      } else {
        console.log("updating pen");
        dispatch({
          type: "UPDATE_PEN",
          payload: { ...elemUpdated(e) },
        });
      }
    } else {
      dispatch({
        type: "ADD_ELEM",
        payload: { ...newElem },
      });
    }
  };

  return {
    height,
    width,
    background,
    elemsList,
    elemsState,
    AddNewElement,
    getRatios,
  };
}
