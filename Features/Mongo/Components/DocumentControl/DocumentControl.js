import React from "react";
import { useSelector } from "react-redux";

import styles from "./DocumentControl.module.css";
import TopIcons from "./TopIcons/TopIcons";
import Insert from "./Create/Insert";
import Search from "./Search/Search";
// import Update from "./Update/Update";
import Delete from "./Delete/Delete";
import Show from "./Show/Show";
import Close from "../CloseIcon/Close";

export default function DocumentControl() {
  const { databaseMenu, controlMode } = useSelector((state) => state);

  const titles = {
    add: "ADD A NEW DOCUMENT",
    search: "SEARCH DOCUMENTS",
    update: "UPDATE DOCUMENTS",
    delete: "DELETE DOCUMENTS",
    show: "SHOW FIELDS",
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        transform:
          databaseMenu === "docs" ? " translate(0%)" : " translate(-100%)",
      }}
    >
      <div className={styles.logo}>
        <img src={"/logoDark.jpg"} className={styles["app-logo"]} />
        <div className={styles["app-name"]}>documents</div>
        <Close />
      </div>
      <TopIcons />
      <div className={styles["control-title"]}>{titles[controlMode]}</div>
      {controlMode === "add" && <Insert />}
      {controlMode === "search" && <Search />}
      {/* {controlMode === "update" && <Update />} */}
      {controlMode === "delete" && <Delete />}
      {controlMode === "show" && <Show />}
    </div>
  );
}
