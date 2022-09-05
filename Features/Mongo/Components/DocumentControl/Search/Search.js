import React from "react";
import { useSelector, useDispatch } from "react-redux";
import usePostFetch from "../../../Lib/usePostFetch";
import queryAggregator from "../../../Lib/queryAggregator";

import styles from "./Search.module.css";
import Query from "../Query/Query";

export default function Search() {
  const dispatch = useDispatch();
  const { queryFieldsList, queryFieldsData, queryMany } = useSelector(
    (state) => state
  );

  const setSearch = (result) => {
    let data = result.reverse();
    dispatch({
      type: "SET_SEARCH",
      payload: data,
    });
  };

  const postFetch = usePostFetch(
    queryMany ? "searchManyDocuments" : "searchDocument",
    setSearch
  );

  const launchSearch = () => {
    const condition = queryAggregator(queryFieldsList, queryFieldsData);
    postFetch({ condition: condition });
  };

  return (
    <form className={styles["form-wrapper"]}>
      <Query btnHandler={launchSearch} btnTitle={"Search Document(s)"} />
    </form>
  );
}
