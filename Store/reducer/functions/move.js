import pathGenerator from "./pathGenerator";

// const getNewCoords = (x, y, X2, Y2, widthRatio, heightRatio) => {
//   return {
//     newY: (y * widthRatio - 1) / widthRatio,
//     newX: (x * heightRatio - 1) / heightRatio,
//   };
// };

export const elem = (state, action) => {
  return {
    ...state,
    elemsState: {
      ...state.elemsState,
      [action.payload.id]: {
        ...state.elemsState[action.payload.id],
        ...action.payload,
      },
    },
  };
};

export const dragDots = (state, action) => {
  return {
    ...state,
    elemsState: {
      ...state.elemsState,
      [action.payload.id]: {
        ...state.elemsState[action.payload.id],
        ...action.payload,
      },
    },
  };
};

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

export const dot = (state, action) => {
  const shapeID =
    state.shapeSelected === "Cursor"
      ? state.polyDotSelected
      : state.penSelected;

  const { x, y, scale } = state.elemsState[shapeID];

  let newDots = [...state.elemsState[shapeID]["dots"]];

  if (action.payload.index !== 0) {
    let rotateBAckDot = rotating(
      action.payload.cx - x,
      action.payload.cy - y,
      newDots[0]["x"],
      newDots[0]["y"],
      -state.elemsState[state.polyDotSelected]["angle"]
    );

    let scaledBack = rescaling(
      rotateBAckDot.x,
      rotateBAckDot.y,
      newDots[0]["x"],
      newDots[0]["y"],
      1 / scale
    );

    newDots[action.payload.index] = {
      ...newDots[action.payload.index],
      x: scaledBack.x,
      y: scaledBack.y,
    };
  } else {
    newDots[action.payload.index] = {
      ...newDots[action.payload.index],
      x: action.payload.cx - x,
      y: action.payload.cy - y,
    };
  }

  let newD = state.elemsState[shapeID]["path"];

  newD =
    "M " +
    newDots.map((dot) => {
      return `${dot.x} ${dot.y} `;
    });
  newD = newD + " Z";

  return {
    ...state,
    elemsState: {
      ...state.elemsState,
      [shapeID]: {
        ...state.elemsState[shapeID],
        dots: newDots,
        d: newD,
      },
    },
  };
};

export const dotPen = (state, action) => {
  const shapeID =
    state.shapeSelected === "Cursor"
      ? state.polyDotSelected
      : state.penSelected;

  const { x, y, scale } = state.elemsState[shapeID];

  let newDots = [...state.elemsState[shapeID]["dots"]];

  let rotateBAckDot = rotating(
    action.payload.cx - x,
    action.payload.cy - y,
    newDots[0]["x"],
    newDots[0]["y"],
    -state.elemsState[shapeID]["angle"]
  );

  let scaledBack = rescaling(
    rotateBAckDot.x,
    rotateBAckDot.y,
    newDots[0]["x"],
    newDots[0]["y"],
    1 / scale
  );
  newDots[action.payload.index] = {
    ...newDots[action.payload.index],
    x: scaledBack.x,
    y: scaledBack.y,
  };

  let newD = state.elemsState[shapeID]["path"];

  newD = pathGenerator(newDots);

  return {
    ...state,
    elemsState: {
      ...state.elemsState,
      [shapeID]: {
        ...state.elemsState[shapeID],
        dots: newDots,
        d: newD,
      },
    },
  };
};

export const focals = (state, action) => {
  const shapeID =
    state.shapeSelected === "Cursor"
      ? state.polyDotSelected
      : state.penSelected;

  const { x, y, scale } = state.elemsState[shapeID];

  let newDots = [...state.elemsState[shapeID]["dots"]];
  if (action.payload.fx === "fx1") {
    let focals1 = rotating(
      action.payload.fx1 - x,
      action.payload.fy1 - y,
      newDots[0]["x"],
      newDots[0]["y"],
      -state.elemsState[shapeID]["angle"]
    );

    let scaledBack1 = rescaling(
      focals1.x,
      focals1.y,
      newDots[0]["x"],
      newDots[0]["y"],
      1 / scale
    );

    newDots[action.payload.index]["fx1"] = scaledBack1.x;
    newDots[action.payload.index]["fy1"] = scaledBack1.y;
  } else {
    let focals2 = rotating(
      action.payload.fx2 - x,
      action.payload.fy2 - y,
      newDots[0]["x"],
      newDots[0]["y"],
      -state.elemsState[shapeID]["angle"]
    );

    let scaledBack2 = rescaling(
      focals2.x,
      focals2.y,
      newDots[0]["x"],
      newDots[0]["y"],
      1 / scale
    );

    newDots[action.payload.index]["fx2"] = scaledBack2.x;
    newDots[action.payload.index]["fy2"] = scaledBack2.y;
  }

  let newD = pathGenerator(newDots);

  return {
    ...state,
    elemsState: {
      ...state.elemsState,
      [shapeID]: {
        ...state.elemsState[shapeID],
        dots: newDots,
        d: newD,
      },
    },
  };
};
