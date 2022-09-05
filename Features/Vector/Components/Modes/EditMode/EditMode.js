import styles from "./Edit.module.css";
import EditSVG from "../../../SVG/Edit";
import EditList from "./Edit";
import EditSvgBackground from "./EdiEditSvgBackground";

import { useSelector } from "react-redux";

export default function EditMode(props) {
  const { elemSelected } = useSelector((state) => state);

  console.log(elemSelected);

  return (
    <div className={styles["edit-control"]}>
      <div className={styles["edit-name"]}>
        <EditSVG size="30" fill="white" className={styles["control-icon"]} />
        EDIT MODE
      </div>
      {elemSelected === "Svg-0" ? <EditSvgBackground /> : <EditList />}
    </div>
  );
}
