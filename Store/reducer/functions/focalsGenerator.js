export default (arr) => {
  let lambda = 0.3;
  let newArr = [...arr];
  return (newArr = newArr.map((point, index) => {
    let point2 = index === newArr.length - 1 ? newArr[0] : newArr[index + 1];
    let point0 = index === 0 ? newArr[newArr.length - 1] : newArr[index - 1];

    if (index < newArr.length - 1) {
      console.log(point);
      return {
        ...point,
        fx1: point.x - (point.x - point0.x) * lambda,
        fy1: point.y - (point.y - point0.y) * lambda,

        fx2: point.x + (point2.x - point.x) * lambda,
        fy2: point.y + (point2.y - point.y) * lambda,
      };
    } else {
      return {
        ...point,

        fx1: point.x - (point.x - point0.x) * lambda,
        fy1: point.y - (point.y - point0.y) * lambda,
        fx2: point.x + (point2.x - point.x) * lambda,
        fy2: point.y + (point2.y - point.y) * lambda,
      };
    }
  }));
};
