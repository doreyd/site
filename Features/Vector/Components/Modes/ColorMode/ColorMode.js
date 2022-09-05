import styles from "./ColorMode.module.css";
import ColorSVG from "../../../SVG/ColorSVG";
import ColorPicked from "./Controls/ColorPicked";
import ColorDisplay from "./Display/ColorDisplay";
import ColorPicks from "./Display/ColorPicks";
import ColorModifiers from "./Controls/ColorModifiers";

import Gradient from "./Controls/Gradient/Gradient";
import StrokeWidth from "./StrokeWidth";
import useColorState from "./useColorState";

export default function ColorMode(props) {
  const colorState = useColorState();

  return (
    <div className={styles["color-mode"]}>
      <div className={styles["edit-name"]}>
        <ColorSVG size="30" fill="white" className={styles["control-icon"]} />
        COLOR MODE
      </div>
      <div className={styles.edit}>
        <div className={styles["prop-container"]}>
          <ColorPicked />
          <ColorDisplay {...colorState} />
          <ColorPicks {...colorState} />
          <ColorModifiers {...colorState} />
          <StrokeWidth />
          <Gradient />
        </div>
      </div>
    </div>
  );
}
