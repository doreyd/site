import React from "react";
import { useSelector } from "react-redux";

import Databases from "./Databases/Databases";
import Collections from "./Collections/Collections";
import Documents from "./Documents/Documents";
import SearchedDocument from "./Documents/SearchedDocument";
import Menu from "./Menu/Menu";
import Modal from "./Modal/Modal";
import DocumentControl from "./DocumentControl/DocumentControl";
import styles from "./Main.module.css";

export default function Main() {
  const { searchOn } = useSelector((state) => state);

  return (
    <div className={styles.main}>
      <Menu />
      <div className={styles.wrapper}>
        {searchOn ? <SearchedDocument /> : <Documents />}
      </div>
      <Databases />
      <Collections />
      {/* <DocumentControl /> */}
      <Modal />
    </div>
  );
}
