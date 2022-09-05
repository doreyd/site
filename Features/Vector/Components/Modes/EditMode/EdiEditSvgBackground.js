import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Edit.module.css";

export default function EdiEditSvgBackground(props) {
  const dispatch = useDispatch();
  const { elemsState } = useSelector((state) => state);
  const { width, height } = elemsState["Svg-0"];

  const clickHandler = () => {
    dispatch({
      type: "CHANGE_DIMENSIONS",
      payload: {
        height: heightRef.current.value,
        width: widthRef.current.value,
      },
    });
    heightRef.current.value = "";
    widthRef.current.value = "";
  };

  const heightRef = useRef();
  const widthRef = useRef();

  return (
    <div className={styles.edit}>
      <div className={styles["prop-container"]} style={{ padding: "5px 20px" }}>
        <div className={styles["prop"]}>
          <div className={styles["prop-name"]}>Height: </div>
          <div className={styles["prop-value"]}>{height}</div>
          <input
            type="text"
            spellCheck={false}
            className={styles["prop-edit"]}
            ref={heightRef}
          />
        </div>
      </div>
      <div className={styles["prop-container"]} style={{ padding: "5px 20px" }}>
        <div className={styles["prop"]}>
          <div className={styles["prop-name"]}>Width: </div>
          <div className={styles["prop-value"]}>{width}</div>
          <input
            type="text"
            spellCheck={false}
            className={styles["prop-edit"]}
            ref={widthRef}
          />
        </div>
      </div>
      <div
        className={styles.button}
        onClick={clickHandler}
        style={{
          padding: "4px 10px",
          display: "flex",
          justifyContent: "center",
          margin: "20px 20px",
        }}
      >
        RESIZE BACKGROUND
      </div>
    </div>
  );
}
