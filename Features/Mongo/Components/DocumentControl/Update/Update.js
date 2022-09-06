import React, { useState } from "react";
import usePostFetch from "../../../Lib/usePostFetch";
import queryAggregator from "../../../Lib/queryAggregator";
import projectAll from "../../../Lib/projectAll";
import styles from "./Update.module.css";
import Query from "../Query/Query";
import Updater from "./Updater/Updater";
import { useSelector, useDispatch } from "react-redux";
import getAllKeys from "../../../Lib/getAllKeys";
import fn from "./Updater/updateFunctions";

export default function Search() {
  const dispatch = useDispatch();
  const {
    queryFieldsList,
    queryFieldsData,
    updateFieldsList,
    updateFieldsData,
    queryMany,
  } = useSelector((state) => state);

  const setSearch = (result) => {
    let data = result.reverse();
    dispatch({
      type: "SET_SEARCH",
      payload: data,
    });
  };

  const setDocuments = (result)=>{
    let data = result.reverse();
    let newKeys = getAllKeys(data);
    let projection = projectAll(newKeys);

    dispatch({
      type: "SET_DOCUMENTS",
      payload: { data, newKeys: newKeys, projection: projection },
    });
  }

  const postFetch = usePostFetch(
    queryMany ? "updateManyDocuments" : "updateDocument",
    setDocuments
  );

  const launchUpdate = () => {
    let dataObjList = updateFieldsList.map((key) => updateFieldsData[key]);
    let updateObj = fn(dataObjList);

    const condition = queryAggregator(queryFieldsList, queryFieldsData);

    postFetch({ condition: condition, update: updateObj });
  };

  return (
    <form className={styles["form-wrapper"]}>
      <Query />
      <Updater btnHandler={launchUpdate} btnTitle={"Update Document(s)"} />
    </form>
  );
}
