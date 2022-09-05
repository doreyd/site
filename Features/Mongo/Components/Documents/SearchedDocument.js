import React from "react";

import styles from "./Documents.module.css";

import { useSelector } from "react-redux";

import OneDocument from "./OneDocument";
import OneDocumentKeys from "./OneDocumentKeys";

export default function SearchedDocument() {
  const { documentSearched } = useSelector((state) => state);

  return (
    <div className={styles["document-wrapper"]}>
      <div className={styles["inside-wrapper"]}>
        <OneDocumentKeys />
        {documentSearched.map((document, index) => (
          <OneDocument document={document} index={index} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}
