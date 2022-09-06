import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Databases.module.css";
import Close from "../CloseIcon/Close";
import usePostFetch from "../../Lib/usePostFetch";

export default function Databases(props) {
  const dispatch = useDispatch();
  const { databases, databaseSelected, databaseMenu, app } = useSelector(
    (state) => state
  );
  const nonDeletableDBs = ["admin", "config", "local", "information_schema"];

  const clickHandler = (db) => {
    dispatch({
      type: "SELECT_DATABASE",
      payload: db,
    });
  };

  const setDatabases = (response) => {
    dispatch({
      type: "SET_DATABASES",
      payload: response.databases.map((db) => {
        if (!nonDeletableDBs.includes(db?.name)) {
          db.id = Math.random();
          return db;
        }
      }),
    });
    addDatabaseRef.current.value = null;
    deleteDatabaseRef.current.value = null;
  };

  const getAllDatabases = usePostFetch("getDatabases", setDatabases);
  const addNewDatabase = usePostFetch("addNewDatabase", getAllDatabases);
  const deleteDatabase = usePostFetch("deleteDatabase", getAllDatabases);

  useEffect(() => {
    getAllDatabases();
  }, [app]);

  const addDatabaseHandler = (e) => {
    addNewDatabase({ newDatabase: addDatabaseRef.current.value });
  };

  const deleteDatabaseHandler = (e) => {
    deleteDatabase({ databaseToDelete: deleteDatabaseRef.current.value });
  };

  const classSelected = (name) =>
    databaseSelected === name ? styles["list-selected"] : styles.list;

  const addDatabaseRef = useRef();
  const deleteDatabaseRef = useRef();

  return (
    <div
      className={styles.wrapper}
      style={{
        transform:
          databaseMenu === "db" ? " translate(0%)" : " translate(-100%)",
      }}
    >
      <div className={styles.logo}>
        <img src={"/logoDark.jpg"} className={styles["app-logo"]} />
        <div className={styles["app-name"]}>databases</div>
        <Close />
      </div>
      <div className={styles["menu"]}>
        <input
          type="text"
          className={styles.input}
          placeholder="type here..."
          ref={addDatabaseRef}
        />
        <button className={styles.btn} onClick={addDatabaseHandler}>
          CREATE
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
          ref={deleteDatabaseRef}
          name="dataType"
          id="dataType"
        >
          {databases &&
            databases.map((db) => {
              return (
                <option
                  key={Math.random()}
                  style={{
                    border: "0px solid white",
                    cursor: "pointer",
                    border: "1px solid rgb(4, 28, 15)",
                  }}
                  value={db?.name}
                >
                  {db?.name}
                </option>
              );
            })}
        </select>
        <button className={styles.btn} onClick={deleteDatabaseHandler}>
          DELETE
        </button>
      </div>
      {databases &&
        databases.map((db) => {
          return (
            <div
              className={classSelected(db?.name)}
              key={db?.id}
              onClick={clickHandler.bind(this, db?.name)}
            >
              {db?.name}
            </div>
          );
        })}
    </div>
  );
}
