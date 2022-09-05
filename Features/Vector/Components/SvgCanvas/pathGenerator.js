export default (dotsList) => {
  let path = "";
  dotsList.forEach((dot, i) => {
    if (i === 0) {
      path =
        "M" +
        dot["x"] +
        "," +
        dot["y"] +
        " C" +
        dot["fx2"] +
        "," +
        dot["fy2"] +
        " " +
        dotsList[i + 1]["fx1"] +
        "," +
        dotsList[i + 1]["fy1"] +
        " " +
        dotsList[i + 1]["x"] +
        "," +
        dotsList[i + 1]["y"];
    } else if (i < dotsList.length - 1) {
      path +=
        " C" +
        dot["fx2"] +
        "," +
        dot["fy2"] +
        " " +
        dotsList[i + 1]["fx1"] +
        "," +
        dotsList[i + 1]["fy1"] +
        " " +
        dotsList[i + 1]["x"] +
        "," +
        dotsList[i + 1]["y"];
    } else if (i === dotsList.length - 1) {
      path +=
        " C" +
        dot["fx2"] +
        "," +
        dot["fy2"] +
        " " +
        dotsList[0]["fx1"] +
        "," +
        dotsList[0]["fy1"] +
        " " +
        dotsList[0]["x"] +
        "," +
        dotsList[0]["y"];
    }
  });
  return path;
};
