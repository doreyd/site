export default (allkeys) => {
  let newProjection = {};
  allkeys.forEach((key) => {
    newProjection = { ...newProjection, [key]: true };
  });
  return newProjection;
};
