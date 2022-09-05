import React from "react";
import { useDispatch } from "react-redux";

import usePostFetch from "./usePostFetch";

export default function useGetAndSetCollections(props) {
  const dispatch = useDispatch();

  const setCollections = (response) => {
    dispatch({
      type: "SET_COLLECTIONS",
      payload: response.map((collection) => {
        collection.id = Math.random();
        return collection;
      }),
    });
  };

  const getAllCollections = usePostFetch("getCollections", setCollections);

  return getAllCollections;
}
