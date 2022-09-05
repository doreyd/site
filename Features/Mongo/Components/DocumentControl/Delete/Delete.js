import React from "react";
import { useSelector, useDispatch } from "react-redux";
import usePostFetch from "../../../Lib/usePostFetch";
import queryAggregator from "../../../Lib/queryAggregator";

import styles from "./Delete.module.css";
import Query from "../Query/Query";

export default function Delete() {
  const dispatch = useDispatch();
  const { queryFieldsList, queryFieldsData, queryMany } = useSelector((state) => state);

  const setDocuments = (result) => {
    let data = result.reverse();
    dispatch({
      type: "SET_SEARCH",
      payload: data,
    });
  };

  const postFetch = usePostFetch(
    queryMany ? "deleteManyDocuments" : "deleteDocument",
    setDocuments
  );

  const launchDelete = () => {
    const condition = queryAggregator(queryFieldsList, queryFieldsData);
    postFetch({ condition: condition });
  };

  return (
    <form className={styles["form-wrapper"]}>
      <Query btnHandler={launchDelete} btnTitle={"Delete Document(s)"} />
    </form>
  );
}
