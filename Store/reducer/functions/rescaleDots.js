export function rescaleDots(arr, lambda) {
  let newArr = arr.map((dot, index) => {
    if (index === 0) {
      return dot;
    } else {
      return {
        cx: newArr[0].cx + (dot.cx - newArr[0].cx) * lambda,
        cy: newArr[0].cy + (dot.cy - newArr[0].cy) * lambda,
      };
    }
  });
  return newArr;
}
