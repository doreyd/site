export default function dragReorder(elem, id, dispatch, oldIndex, length) {
  let itemHeight = 40;

  const startDrag = (e) => {
    dispatch({
      type: "SELECT_ELEM",
      payload: id,
    });

    document.onmouseup = endDrag;
    document.onmousemove = drag;
  };

  const drag = (e) => {
    e = e || window.event;
    e.preventDefault();

    // const Y1 =
    //   e.clientY - 40 + elem.parentNode.scrollTop - parseInt(listData.top);

    const Y1 = e.clientY - 40 + elem.parentNode.scrollTop - parseInt(10);

    let newIndex = Math.floor(Y1 / itemHeight - 1);
    newIndex = newIndex < 0 ? 0 : newIndex;
    newIndex = newIndex > length - 1 ? length - 1 : newIndex;

    if (oldIndex !== newIndex) {
      dispatch({
        type: "REORDER_LIST",
        payload: {
          // elem: elem.innerText,
          elem: id,
          oldIndex: oldIndex,
          newIndex: newIndex,
        },
      });
      oldIndex = newIndex;
    }
  };

  const endDrag = (e) => {
    document.onmousemove = null;
    document.onmouseup = null;
  };

  elem.onmousedown = startDrag;
}
