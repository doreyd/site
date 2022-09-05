export default (allKeys) => {
  // if (allKeys) {
  let newInsertFields = {};
  allKeys.forEach((key) => {
    newInsertFields = {
      ...newInsertFields,
      [key]: {
        name: key,
        value: "",
        type: "string",
      },
    };
  });
  return newInsertFields;
  // }
};
