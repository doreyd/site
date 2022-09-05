import typesFormatter from "./typesFormatter";

export default (allKeys, insertFieldsData, insertExtraFieldsList, status) => {
  let newDocument = {};
  allKeys.forEach((key) => {
    if (key !== "_id") {
      newDocument = {
        ...newDocument,
        [key]: typesFormatter(
          insertFieldsData[key]["value"],
          insertFieldsData[key]["type"]
        ),
      };
    } else if (key === "_id" && status) {
      newDocument = {
        ...newDocument,
        _id: insertFieldsData["_id"]["value"],
      };
    }
  });
  let newKeys = [];
  insertExtraFieldsList.forEach((key) => {
    newKeys.push(insertFieldsData[key]["name"]);
    newDocument = {
      ...newDocument,
      [insertFieldsData[key]["name"]]: typesFormatter(
        insertFieldsData[key]["value"],
        insertFieldsData[key]["type"]
      ),
    };
  });
  return newDocument;
};
