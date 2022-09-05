const propsInit = {
  fill: "lightblue",
  stroke: "red",
  transform: "rotate(0deg)",
  gradient: "none",
  // rotate: "0",
  turns: 0,
  strokeWidth: 0,
  strokeGradient: "none",
  angle: 0,
  opacity: 1,
  fillMode: "fill", // either fill or stroke
  strokegradient: "none",
  fillgradient: "linear",
};

const textGenerator = (x, y) => {
  return {
    type: "Text",
    ratio: 1,
    x: x,
    y: y,
    ...propsInit,
  };
};

const circleGenerator = (x, y) => {
  return {
    type: "Circle",
    ratio: 1,
    cx: x,
    cy: y,
    rx: 50,
    ry: 50,
    ...propsInit,
  };
};

const squareGenerator = (x, y) => {
  return {
    type: "Square",
    ratio: 1,
    x: x - 40,
    y: y - 40,
    height: 80,
    width: 80,
    ...propsInit,
  };
};

const laptopGenerator = (x, y) => {
  return {
    type: "Laptop",
    ratio: 1,
    x: x - 40,
    y: y - 40,
    height: 80,
    width: 80,
    ...propsInit,
  };
};

const triangleGenerator = (x, y) => {
  return {
    type: "Triangle",
    ratio: 1,
    x: x - 22,
    y: y - 22,
    height: 40,
    width: 40,
    ...propsInit,
    d: "M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z",
  };
};

const polyDotGenerator = (x, y) => {
  return {
    type: "PolyDot",
    ratio: 1,
    x: x - 40,
    y: y - 40,
    height: 80,
    width: 80,
    d: "",
    scale: 1,
    dots: [],
    ...propsInit,
    strokeWidth: 5,
    stroke: "blue",
  };
};

const cursorGenerator = (x, y) => {
  return {
    type: "Cursor",
    ratio: 1,
    x: 0,
    y: 0,
    scale: 1,
    dots: [{ x: x, y: y }],
    d: `M ${x} ${y}`,
    ...propsInit,
    strokeWidth: 1,
    stroke: "orange",
  };
};

const penGenerator = (x, y) => {
  return {
    type: "Pen",
    ratio: 1,
    x: 0,
    y: 0,
    scale: 1,
    angle: 0,
    dots: [{ x: x, y: y }],
    paths: [],
    d: `M ${x} ${y}`,
    ...propsInit,
    strokeWidth: 1,
    stroke: "orange",
  };
};

export default {
  Circle: circleGenerator,
  Text: textGenerator,
  Square: squareGenerator,
  Laptop: laptopGenerator,
  Triangle: triangleGenerator,
  PolyDot: polyDotGenerator,
  Cursor: cursorGenerator,
  Pen: penGenerator,
};
