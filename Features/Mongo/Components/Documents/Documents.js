import React from "react";
import { useEffect, useState } from "react";

import styles from "./Documents.module.css";
import usePostFetch from "../../Lib/usePostFetch";

import { useSelector, useDispatch } from "react-redux";
import getAllKeys from "../../Lib/getAllKeys";
import projectAll from "../../Lib/projectAll";
import Empty from "../Empty/Empty";
import Loading from "../Loading/Loading";
import OneDocument from "./OneDocument";
import OneDocumentKeys from "./OneDocumentKeys";

export default function Documents() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { databaseSelected, collectionSelected, documents, app } = useSelector(
    (state) => state
  );

  const theseDocuments = documents[databaseSelected + "-" + collectionSelected];
  // const notEmpty = theseDocuments && theseDocuments.length !== 0;

  const setDocuments = (response) => {
    let data = response.reverse();
    let newKeys = getAllKeys(data);
    let projection = projectAll(newKeys);

    dispatch({
      type: "SET_DOCUMENTS",
      payload: { data, newKeys: newKeys, projection: projection },
    });
    setLoading(false);
  };

  const getAllDoduments = usePostFetch("getDocuments", setDocuments);

  useEffect(() => {
    setLoading(true);
    getAllDoduments();
  }, [app, databaseSelected, collectionSelected]);

  return (
    <div className={styles["document-wrapper"]}>
      <div className={styles["inside-wrapper"]}>
        <OneDocumentKeys />
        {!loading ? (
          // !notEmpty ? (
          //   <Empty />
          // ) : (
          theseDocuments?.map((document, index) => (
            <OneDocument
              document={document}
              index={index}
              key={Math.random()}
            />
          ))
        ) : (
          // )
          <Loading />
        )}
      </div>
    </div>
  );
}
