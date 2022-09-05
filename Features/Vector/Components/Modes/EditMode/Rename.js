import React, { Fragment, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Edit.module.css";

export default function Rename(props) {
  const dispatch = useDispatch();
  const newNameRef = useRef();

  const elemSelected = useSelector((state) => state.elemSelected);
  const renameHandler = (e) => {
    if (newNameRef.current.value !== "") {
      dispatch({
        type: "RENAME_ELEM",
        payload: {
          id: elemSelected,
          newName: newNameRef.current.value,
        },
      });
      newNameRef.current.value = "";
    }
  };

  return (
    <div className={styles["prop"]}>
      <input
        ref={newNameRef}
        type="text"
        spellCheck={false}
        className={styles["prop-edit"]}
      />
      <div className={styles.button2} onClick={renameHandler}>
        RENAME ELEMENT
      </div>
    </div>
  );
}
