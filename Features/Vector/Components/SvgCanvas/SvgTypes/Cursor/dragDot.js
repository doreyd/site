export default function dragDot(elem, dispatch, moveDispatch, index) {
  let X1 = 0,
    Y1 = 0,
    X2 = 0,
    Y2 = 0;

  const startDrag = (e) => {
    dispatch({ type: "SELECT_ELEM", payload: elem.id });
    e = e || window.event;
    e.preventDefault();
    X1 = e.clientX;
    Y1 = e.clientY;
    document.onmouseup = endDrag;
    document.onmousemove = drag;
  };

  const drag = (e) => {
    e = e || window.event;
    e.preventDefault();
    X2 = X1 - e.clientX;
    Y2 = Y1 - e.clientY;
    X1 = e.clientX;
    Y1 = e.clientY;

    dispatch({
      type: "MOVE_DOT",
      payload: moveDispatch(elem, X2, Y2, index),
    });
  };

  const endDrag = (e) => {
    document.onmouseup = null;
    document.onmousemove = null;
  };

  elem.onmousedown = startDrag;
}
