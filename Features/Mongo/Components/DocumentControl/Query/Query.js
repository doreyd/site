import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Query.module.css";
import QueryLine from "./QueryLine";

export default function Query(props) {
  const dispatch = useDispatch();
  const { queryFieldsList, queryFieldsData, allKeys, controlMode, queryMany } =
    useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: "CLEAR_QUERY" });
  }, [controlMode]);

  const addNewField = () => {
    dispatch({ type: "ADD_QUERY_FIELD", payload: Math.random() });
  };

  const toggleQuery = () => {
    dispatch({ type: "TOGGLE_QUERY" });
  };
  // const queryAll = (
  //   <Fragment>
  //     <div>Query All Documents </div>
  //     <div style={{ fontSize: "0.8rem", cursor: "pointer" }}>
  //       <input
  //         type="checkbox"
  //         checked={!queryMany}
  //         onClick={toggleQuery}
  //         value="One"
  //       />
  //       for One
  //       <input
  //         type="checkbox"
  //         checked={queryMany}
  //         onClick={toggleQuery}
  //         value="Many"
  //       />
  //       or Many Documents
  //     </div>
  //   </Fragment>
  // );

  return (
    <Fragment>
      <div className={styles["form-title"]} style={{ marginTop: "1rem" }}>
        <div>Query All Documents </div>
        <div
          style={{
            fontSize: "0.8rem",
          }}
        >
          <input
            type="checkbox"
            checked={!queryMany}
            onClick={toggleQuery}
            value="One"
            id="one"
            style={{ fontSize: "0.8rem", cursor: "pointer" }}
          />
          <label
            htmlFor="one"
            style={{ fontSize: "0.8rem", cursor: "pointer" }}
          >
            for One
          </label>
          <input
            type="checkbox"
            checked={queryMany}
            onClick={toggleQuery}
            value="Many"
            id="many"
            style={{ fontSize: "0.8rem", cursor: "pointer" }}
          />
          <label
            htmlFor="many"
            style={{ fontSize: "0.8rem", cursor: "pointer" }}
          >
            or Many Documents
          </label>
        </div>
      </div>
      <div className={styles["menu-vertical"]}>
        {queryFieldsList.map((id) => {
          let line = queryFieldsData[id];
          return <QueryLine id={id} line={line} allKeys={allKeys} />;
        })}
      </div>
      <div className={styles["menu2"]}>
        <div className={styles.btn2} onClick={addNewField}>
          Add New Condition
        </div>
        {props.btnHandler ? (
          <div className={styles.btn2} onClick={props.btnHandler}>
            {props.btnTitle}
          </div>
        ) : null}
      </div>
    </Fragment>
  );
}
