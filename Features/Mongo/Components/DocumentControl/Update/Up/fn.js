const typesFormatter = (value, type) => {
  switch (type) {
    case "string":
      return value;
    case "array":
      return JSON.parse(value);
    case "object":
      return JSON.parse(value);
    case "integer":
      return parseInt(value);
    case "double":
      return parseFloat(value);
    case "boolean":
      return value === "true" ? true : false;
    case "date":
      return Date.now();
  }
};

const digitOperations = ["$inc", "$mul", "$min", "$max"];
const specialOps = [
  "$set",
  "$setOnInsert",
  "$rename",
  "$unset",
  "$addToSet",
  "$pop",
  "$pull",
  "$push",
  "$pullAll",
];

const getValueToApply = (updateLine) => {
  let { val1, val2, val3, val4 } = updateLine;
  let valueToApply = val3;
  if (specialOps.includes(val2)) {
    valueToApply = typesFormatter(val3, val4);
  } else if (digitOperations.includes(val2)) {
    valueToApply = typesFormatter(val3, "integer");
  } else if (val2 === "$currentDate") {
    valueToApply = typesFormatter(val3, "date");
  }
  return valueToApply;
};

export default (list) => {
  let obj = {};
  list.forEach((updateLine) => {
    let { val1, val2, val3, val4 } = updateLine;
    let valueToApply = getValueToApply(updateLine);
    obj[val2] = obj[val2]
      ? {
          ...obj[val2],
          [val1]: valueToApply,
        }
      : {
          [val1]: valueToApply,
        };
  });
  return obj;
};
