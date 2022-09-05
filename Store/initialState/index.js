import settingState from "./settingState";
import elemsState from "./elemsState";
import colorState from "./colorState";
import filesState from "./filesState";
import initialStateMongo from "./initialStateMongo";

export default {
  ...settingState,
  ...elemsState,
  ...colorState,
  ...filesState,
  ...initialStateMongo,
  sectionSelected: "Home",
  lastSelected: "Home",
};
