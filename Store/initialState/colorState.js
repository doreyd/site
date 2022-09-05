const backgroundGradientInit = {
  0: {
    id: 0,
    type: "linear",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%",
    offSets: [
      { offset: "5%", style: { stopColor: "gold", stopOpacity: 1 } },
      { offset: "95%", style: { stopColor: "red", stopOpacity: 1 } },
    ],
  },

  1: {
    id: 1,
    type: "radial",
    cx: "50%",
    cy: "50%",
    r: "100%",
    fx: "50%",
    fy: "50%",
    offSets: [
      { offset: "5%", style: { stopColor: "gold", stopOpacity: 1 } },
      { offset: "95%", style: { stopColor: "red", stopOpacity: 1 } },
    ],
  },
  20: {
    id: 0,
    type: "linear",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%",
    offSets: [
      { offset: "5%", style: { stopColor: "gold", stopOpacity: 1 } },
      { offset: "95%", style: { stopColor: "red", stopOpacity: 1 } },
    ],
  },

  3: {
    id: 1,
    type: "radial",
    cx: "50%",
    cy: "50%",
    r: "100%",
    fx: "50%",
    fy: "50%",
    offSets: [
      { offset: "5%", style: { stopColor: "gold", stopOpacity: 1 } },
      { offset: "95%", style: { stopColor: "red", stopOpacity: 1 } },
    ],
  },
};

export default {
  hue: 320,
  saturation: 90,
  lightness: 30,
  opacity: 100,
  gradient: "linear", // or linear gradient or radial gradient
  strokeGradient: "none",
  target: "fill", // or stroke
  gradientsList: [],
  gradients: {
    ...backgroundGradientInit,
  },
};
