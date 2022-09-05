import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Edit.module.css";

export default function Delete(props) {
  const dispatch = useDispatch();

  const elemSelected = useSelector((state) => state.elemSelected);
  const deleteHandler = (e) => {
    dispatch({
      type: "DELETE_ELEM",
      payload: {
        id: elemSelected,
      },
    });
  };

  return (
    <Fragment>
      <div className={styles.button} onClick={deleteHandler}>
        DELETE ELEMENT
      </div>
    </Fragment>
  );
}
