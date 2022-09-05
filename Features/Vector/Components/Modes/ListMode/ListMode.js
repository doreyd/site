
import styles from "./List.module.css";
import Layers from "../../../SVG/Layers";
import List from "./List";

export default function ListMode(props) {
  return (
    <div id="list" className={styles["list-control"]}>
      <div id="list-handle" className={styles["list-name"]}>
        <Layers size="30" fill="white" className={styles["control-icon"]} />
        LIST MODE
      </div>
      <List />
    </div>
  );
}
