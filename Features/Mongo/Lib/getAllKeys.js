export default (arr) => {
  let allKeys = [];

  if (!arr) {
    return [];
  }
  arr.forEach((doc) => {
    Object.keys(doc).forEach((key) => {
      if (!allKeys.includes(key)) {
        allKeys.push(key);
      }
    });
  });
  return allKeys;
};
