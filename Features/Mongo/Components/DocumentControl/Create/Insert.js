import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import getAllKeys from "../../../Lib/getAllKeys";
import usePostFetch from "../../../Lib/usePostFetch";
import initializeNewFields from "../../../Lib/initializeNewFields";
import buildNewDocument from "../../../Lib/buildNewDocument";
import NewField from "./NewField";
import InsertButton from "./InsertButton";
import styles from "./DocumentControl.module.css";
import Field from "./Field";
import IdField from "./IdField";

export default function Documents() {
  const dispatch = useDispatch();
  const {
    databaseSelected,
    collectionSelected,
    insertFieldsData,
    insertExtraFieldsList,
    allKeys,
  } = useSelector((state) => state);
  const [status, setStatus] = useState(false);

  const toggleIdStatus = () => {
    setStatus((status) => !status);
  };

  useEffect(() => {
    // initialize new fields on rendering
    dispatch({
      type: "SET_INSERT_FIELDS",
      payload: initializeNewFields(allKeys),
    });
  }, [databaseSelected, collectionSelected, allKeys]);

  const setNewDocuments = (result) => {
    let data = result.reverse();
    let newKeys = getAllKeys(data);

    console.log("newKeys");
    console.log(newKeys);
    let projection = {};
    newKeys.forEach((key) => {
      projection = { ...projection, [key]: true };
    });
    dispatch({
      type: "SET_DOCUMENTS",
      payload: { data, newKeys: newKeys, projection: projection },
    });
    dispatch({
      type: "SET_INSERT_FIELDS",
      payload: initializeNewFields(allKeys),
    });
  };

  const getAllDoduments = usePostFetch("getDocuments", setNewDocuments);

  const postFetch = usePostFetch("addNewDocument", getAllDoduments);

  const clickHandler = () => {
    postFetch({
      newDocument: buildNewDocument(
        allKeys,
        insertFieldsData,
        insertExtraFieldsList,
        status
      ),
    });
  };

  return (
    <form className={styles["form-wrapper"]}>
      {allKeys.map((key) => {
        return key === "_id" ? (
          <IdField
            key={key}
            status={status}
            field={insertFieldsData[key]}
            toggleIdStatus={toggleIdStatus}
          />
        ) : (
          <Field key={key} field={insertFieldsData[key]} />
        );
      })}
      <InsertButton clickHandler={clickHandler} />
      <NewField />
    </form>
  );
}
