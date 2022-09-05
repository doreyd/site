export default (value, type) => {
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
