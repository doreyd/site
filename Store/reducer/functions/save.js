const timeStamp = 0;

export const saveState = (state, action) => {
  let currentTime = Date.now();
  if (currentTime - timeStamp < 200) {
    return;
  }
  timeStamp = currentTime;
  let newStateHistory = [...state.stateHistory, { ...state }];

  return {
    stateHistory: [...newStateHistory],
    stateIndex: state.stateIndex + 1,
  };
};


