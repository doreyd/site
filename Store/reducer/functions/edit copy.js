import pathGenerator from "./pathGenerator";
import focalsGenerator from "./focalsGenerator";

const rotating = (x, y, x0, y0, alpha) => {
  let newAlpha = (alpha * Math.PI) / 180;

  let newX = x0 + (x - x0) * Math.cos(newAlpha) - (y - y0) * Math.sin(newAlpha);
  let newY = y0 + (x - x0) * Math.sin(newAlpha) + (y - y0) * Math.cos(newAlpha);
  return { x: newX, y: newY };
};

const rescaling = (x, y, x0, y0, lambda) => {
  let newX = x0 + (x - x0) * lambda;
  let newY = y0 + (y - y0) * lambda;

  return { x: newX, y: newY };
};

export const elem = (state, action) => {
  return {
    ...state,
    elemsState: {
      ...state.elemsState,
      [action.payload.id]: {
        ...state.elemsState[action.payload.id],
        [action.payload.name]: action.payload.value,
      },
    },
  };
};

export const rotate = (state, action) => {
  return {
    ...state,
    elemsState: {
      ...state.elemsState,
      [action.payload.id]: {
        ...state.elemsState[action.payload.id],
        [action.payload.name]: action.payload.value,
      },
    },
  };
};

export const rotateDots = (state, action) => {
  return {
    ...state,
    elemsState: {
      ...state.elemsState,
      [action.payload.id]: {
        ...state.elemsState[action.payload.id],
        ["angle"]: action.payload.value,
      },
    },
  };
};

export const rescale = (state, action) => {
  return {
    ...state,
    elemsState: {
      ...state.elemsState,
      [state.elemSelected]: {
        ...state.elemsState[state.elemSelected],
        scale: action.payload,
      },
    },
  };
};

export const updatePolyDot = (state, action) => {
  console.log(state.polyDotSelected);
  const { x, y, angle, scale } = state.elemsState[state.polyDotSelected];

  let newDots = [...state.elemsState[state.polyDotSelected]["dots"]];

  let rotateBack = rotating(
    action.payload.x,
    action.payload.y,
    newDots[0]["x"],
    newDots[0]["y"],
    -angle
  );

  let scaledBack = rescaling(
    rotateBack.x,
    rotateBack.y,
    newDots[0]["x"],
    newDots[0]["y"],
    1 / scale
  );

  newDots = [...newDots, { x: scaledBack.x - x, y: scaledBack.y - y }];

  let newD =
    "M " +
    newDots.map((dot) => {
      return `${dot.x} ${dot.y} `;
    });
  newD = newD + " Z";

  return {
    ...state,
    elemsState: {
      ...state.elemsState,
      [state.polyDotSelected]: {
        ...state.elemsState[state.polyDotSelected],
        dots: newDots,
        d: newD,
      },
    },
  };
};

export const updatePen = (state, action) => {
  const { x, y, scale, angle } = state.elemsState[state.penSelected];
  let newDots = [...state.elemsState[state.penSelected]["dots"]];

  let rotateBack = rotating(
    action.payload.x - x,
    action.payload.y - y,
    newDots[0]["x"],
    newDots[0]["y"],
    -angle
  );

  let scaledBack = rescaling(
    rotateBack.x,
    rotateBack.y,
    newDots[0]["x"],
    newDots[0]["y"],
    1 / scale
  );

  newDots = [...newDots, { x: scaledBack.x, y: scaledBack.y }];
  let newDots2 = focalsGenerator(newDots);

  if (newDots.length === 1) {
    newDots = [...newDots2];
  } else {
    newDots[newDots.length - 1] = { ...newDots2[newDots.length - 1] };
    newDots[newDots.length - 2] = {
      ...newDots[newDots.length - 2],
      fx2: newDots2[newDots.length - 2]["fx2"],
      fy2: newDots2[newDots.length - 2]["fy2"],
    };
    newDots[0] = {
      ...newDots[0],
      fx1: newDots2[0]["fx1"],
      fy1: newDots2[0]["fy1"],
    };
  }

  let newD = pathGenerator(newDots);

  return {
    ...state,
    elemsState: {
      ...state.elemsState,
      [state.penSelected]: {
        ...state.elemsState[state.penSelected],
        dots: newDots,
        d: newD,
      },
    },
  };
};

export const setProp = (state, action) => {
  console.log(state.elemsState);
  let newelemState = {
    ...state.elemsState,
    [state.elemSelected]: {
      ...state.elemsState[state.elemSelected],
      [action.payload.field]: action.payload.value,
    },
  };
  console.log(newelemState);
  return {
    ...state,
    elemsState: newelemState,
  };
};

export const setColorProp = (state, action) => {
  return {
    ...state,
    [action.payload.field]: action.payload.value,
  };
};

// export const applyColor = (state, action) => {
//   console.log(state.elemSelected);
//   let targetGradient = state.target === "fill" ? "gradient" : "strokeGradient";
//   let value = state.target === "fill" ? state.gradient : state.strokeGradient;

//   let gradType = state.gradient === "linear" ? "linGrad" : "radGrad";

//   console.log(state.elemSelected);

//   let linID = state.elemsState[state.elemSelected]["linGrad"]["id"];
//   let radID = state.elemsState[state.elemSelected]["radGrad"]["id"];

//   let newState = {
//     ...state,
//     elemsState: {
//       ...state.elemsState,
//       [state.elemSelected]: {
//         ...state.elemsState[state.elemSelected],
//         [gradType]: { ...state[gradType] },
//         [targetGradient]: value,
//         [state.target]: action.payload?.transparent
//           ? "transparent"
//           : `hsl(${state.hue}, ${state.saturation}%, ${state.lightness}%)`,
//           linGrad
//       },
//     },
//   };

//   console.log(newState);

//   return {
//     ...newState,
//     // ...state,
//     // elemsState: {
//     //   ...state.elemsState,
//     //   [state.elemSelected]: {
//     //     ...state.elemsState[state.elemSelected],
//     //     [gradType]: state[gradType],
//     //     [targetGradient]: value,
//     //     [state.target]: action.payload?.transparent
//     //       ? "transparent"
//     //       : `hsl(${state.hue}, ${state.saturation}%, ${state.lightness}%)`,
//     //   },
//     // },
//   };
// };

export const applyColor = (state, action) => {
  // console.log("slkfjsdflsdfsdjf");

  let newMod = {
    ...state.elemLinGrad,
    [state.elemSelected]: { ...state.linGrad },
  };
  console.log("mod");
  console.log(newMod);
  return {
    ...state,
    elemLinGrad: { ...newMod },

    // elemsState: {
    //   ...state.elemsState,
    //   [state.elemSelected]: {
    //     ...state.elemsState[state.elemSelected],
    //     linGrad: {
    //       // id: "linear" + id,
    //       x1: "0%",
    //       y1: "0%",
    //       x2: "100%",
    //       y2: "100%",
    //       offSets: [...state.linGrad.offSets],

    //     },
    //   },
    // },
  };
};
