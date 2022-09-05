import typesFormatter from "./typesFormatter";

export default (queryList, queryData) => {
  let fullQuery = {};
  queryList.forEach((query) => {
    fullQuery = {
      ...fullQuery,
      [queryData[query]["val1"]]: {
        [queryData[query]["val2"]]: typesFormatter(
          queryData[query]["val3"],
          queryData[query]["val4"]
        ),
      },
    };
  });
  return fullQuery;
};
