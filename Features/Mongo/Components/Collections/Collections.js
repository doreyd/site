import React, { useRef } from "react";
import { useEffect } from "react";

import styles from "./Collections.module.css";
import usePostFetch from "../../Lib/usePostFetch";
import { useSelector, useDispatch } from "react-redux";
import Close from "../CloseIcon/Close";

export default function Collections() {
  const dispatch = useDispatch();
  const {
    collections,
    databaseSelected,
    collectionSelected,
    databaseMenu,
    app,
  } = useSelector((state) => state);

  const theseCollections = collections[databaseSelected];

  const classSelected = (name) =>
    collectionSelected === name ? styles["list-selected"] : styles.list;

  const setCollections = (response) => {
    dispatch({
      type: "SET_COLLECTIONS",
      payload: response.map((collection) => {
        collection.id = Math.random();
        return collection;
      }),
    });
    addCollectionRef.current.value = null;
    deleteCollectionRef.current.value = null;
  };

  const getAllCollections = usePostFetch("getCollections", setCollections);
  const postAddNewCollection = usePostFetch(
    "addNewCollection",
    getAllCollections
  );
  const postDeleteCollection = usePostFetch(
    "deleteCollection",
    getAllCollections
  );

  useEffect(() => {
    getAllCollections();
  }, [databaseSelected, app]);

  const addCollectionHandler = (e) => {
    postAddNewCollection({ newCollection: addCollectionRef.current.value });
  };

  const deleteCollectionHandler = (e) => {
    postDeleteCollection({
      collectionToDelete: deleteCollectionRef.current.value,
    });
  };

  const clickHandler = (collection) => {
    dispatch({
      type: "SELECT_COLLECTION",
      payload: collection,
    });
  };

  const addCollectionRef = useRef();
  const deleteCollectionRef = useRef();

  return (
    <div
      className={styles.wrapper}
      style={{
        transform:
          databaseMenu === "coll" ? " translate(0%)" : " translate(-100%)",
      }}
    >
      <div className={styles.logo}>
        <img src={"/logoDark.jpg"} className={styles["app-logo"]} />
        <div className={styles["app-name"]}>collections</div>
        <Close />
      </div>

      <div className={styles["menu"]}>
        <input
          type="text"
          className={styles.input}
          placeholder="type here..."
          ref={addCollectionRef}
        />
        <button className={styles.btn} onClick={addCollectionHandler}>
          CREATE{" "}
        </button>
      </div>
      <div className={styles["menu"]}>
        <select
          style={{
            background: "rgb(4, 28, 15)",
            color: "white",
            top: "1.2rem",
            width: "60%",
            height: "1.5rem",
            borderRadius: "5px",
            border: "1px solid white",
            cursor: "pointer",
          }}
          ref={deleteCollectionRef}
          name="dataType"
          id="dataType"
        >
          {theseCollections
            ? theseCollections.map((collection) => {
                return (
                  <option
                    key={Math.random()}
                    style={{
                      border: "0px solid white",
                      cursor: "pointer",
                      border: "1px solid rgb(4, 28, 15)",
                    }}
                    value={collection.name}
                  >
                    {collection.name}
                  </option>
                );
              })
            : null}
        </select>
        <button className={styles.btn} onClick={deleteCollectionHandler}>
          DELETE{" "}
        </button>
      </div>
      {theseCollections &&
        theseCollections.map((collection) => (
          <div
            className={classSelected(collection.name)}
            key={collection.id}
            onClick={clickHandler.bind(this, collection.name)}
          >
            {collection.name}
          </div>
        ))}
    </div>
  );
}
