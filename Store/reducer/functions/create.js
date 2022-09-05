const linearGradientInit = (id) => {
  return {
    id: id,
    type: "linear",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%",
    offSets: [
      { offset: "5%", style: { stopColor: "gold", stopOpacity: 1 } },
      { offset: "95%", style: { stopColor: "red", stopOpacity: 1 } },
    ],
  };
};

const radialGradientInit = (id) => {
  return {
    id: id,
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
  };
};

const getUrl = (id) => "url(#" + id + ")";

export const elem = (state, action) => {
  let qty = state.elemsTotal + 1;

  let newGradients = (baseID) => {
    return {
      [baseID]: linearGradientInit(baseID),
      [baseID + 1]: radialGradientInit(baseID + 1),
      [baseID + 2]: linearGradientInit(baseID + 2),
      [baseID + 3]: radialGradientInit(baseID + 3),
    };
  };

  return {
    ...state,
    gradientsList: [
      ...state.gradientsList,
      qty * 4,
      qty * 4 + 1,
      qty * 4 + 2,
      qty * 4 + 3,
    ],
    gradients: { ...state.gradients, ...newGradients(qty * 4) },
    elemsTotal: qty,
    elemSelected: action.payload.type + "-" + qty,
    polyDotSelected:
      action.payload.type === "Cursor"
        ? action.payload.type + "-" + qty
        : state.polyDotSelected,
    penSelected:
      action.payload.type === "Pen"
        ? action.payload.type + "-" + qty
        : state.penSelected,
    elemsList: [action.payload.type + "-" + qty, ...state.elemsList],
    elemsListReverse: [
      ...state.elemsListReverse,
      action.payload.type + "-" + qty,
    ],
    elemsState: {
      ...state.elemsState,
      [action.payload.type + "-" + qty]: {
        ...action.payload,
        id: action.payload.type + "-" + qty,
        name: action.payload.type + "-" + qty, //
        linearFillUrl: getUrl(qty * 4),
        linearFillID: qty * 4,
        radialFillUrl: getUrl(qty * 4 + 1),
        radialFillID: qty * 4 + 1,
        linearStrokeUrl: getUrl(qty * 4 + 2),
        linearStrokeID: qty * 4 + 2,
        radialStrokeUrl: getUrl(qty * 4 + 3),
        radialStrokeID: qty * 4 + 3,
      },
    },
  };
};

export const changeOffset = (state, action) => {
  let newGradients = { ...state.gradients };

  let newOffsets = newGradients[action.payload.id]["offSets"];
  newOffsets[action.payload.index][action.payload.field] = action.payload.value;

  newGradients[action.payload.id] = {
    ...newGradients[action.payload.id],
    offSets: newOffsets,
  };
  return {
    ...state,
    gradients: { ...newGradients },
  };
};

export const changeGradient = (state, action) => {
  return {
    ...state,
    gradients: {
      ...state.gradients,
      [action.payload.id]: {
        ...state.gradients[action.payload.id],
        [action.payload.field]: action.payload.value,
      },
    },
  };
};

export const addOffset = (state, action) => {
  return {
    ...state,
    gradients: {
      ...state.gradients,
      [action.payload.id]: {
        ...state.gradients[action.payload.id],
        offSets: [
          ...state.gradients[action.payload.id]["offSets"],
          { offset: "100%", style: { stopColor: "green", stopOpacity: 1 } },
        ],
      },
    },
  };
};
