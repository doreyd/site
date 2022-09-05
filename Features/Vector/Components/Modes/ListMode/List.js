import styles from "./List.module.css";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";

export default function List(props) {
  const elemsList = useSelector((state) => state.elemsList);

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <ul onDragOver={allowDrop} className={styles.list}>
      {elemsList.map((id, index) => {
        return (
          <Item
            key={id}
            id={id}
            index={index}
            length={elemsList.length}
          />
        );
      })}
    </ul>
  );
}
