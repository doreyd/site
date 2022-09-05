const svgBackInit = {
  ["Svg-0"]: {
    id: "Svg-0",
    x: 0,
    y: 0,
    width: "1000",
    height: "600",
    // linearFillUrl:
    //   "linear-gradient(90deg, gold 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    // radialFillUrl:
    //   "radial-gradient(rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    fillgradient: "none",
    fill: "white",
    stroke: "gold",
    // transform: "rotate(0deg)",
    // gradient: "none",
    rotate: "0",
    turns: 0,
    strokeWidth: 0,
    strokeGradient: "none",
    angle: 0,
    opacity: 1,
    fillMode: "fill", // either fill or stroke
    linearFillID: 0,
    radialFillID: 1,
    linearStrokeID: 2,
    radialStrokeID: 3,
  },
};

export default {
  elemsState: {
    ...svgBackInit,
  },
  elemsList: [],
  elemsListReverse: [],
  elemsTotal: 0,
  elemSelected: "",
  polyDotSelected: "",
  penSelected: "",
  stateHistory: [],
  stateIndex: 0,
  elemLinGrad: {},

  svgInnerHtml: null,
  updateSvgHtml: true,
};
