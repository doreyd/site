import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Menu.module.css";

export default function AddDocument() {
  const databaseSelected = useSelector((state) => state.databaseSelected);
  const collectionSelected = useSelector((state) => state.collectionSelected);
  const dispatch = useDispatch();

  const body = {
    database: databaseSelected,
    collection: collectionSelected,
    newDocument: { name: "Company Inc", address: "Highway 40" },
  };

  const url = "/api/document/adddocument";

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  const clickHandler = () => {
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        dispatch({
          type: "ADD_DOCUMENT",
          payload: { _id: result.insertedId, ...body.newDocument },
        });
      });
  };

  return (
    <div
      style={{ fontSize: "2rem", fontWeight: 600, color: "rgb(12, 2, 47)" }}
      onClick={clickHandler}
    >
      <img src="/mongodbLogo.jpg" className={styles.logo} />
      <div className={styles.logoName}>MongoDB</div>
    </div>
  );
}
