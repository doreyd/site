const rescaling = (x, y, x0, y0, lambda) => {
  let newX = x0 + (x - x0) * lmabda;
  let newY = y0 + (y - y0) * lambda;

  return { newX, newY };
};

const reverseScaling = (x, y, x0, y0, lambda) => {
  let newX = x0 + (x - x0) / lmabda;
  let newY = y0 + (y - y0) / lambda;

  return { newX, newY };
};

const rotating = (x, y, x0, y0, alpha) => {
  let beta = Math.atang(y - y0) / (x - x0) - alpha;

  let newX = x0 + (x - x0) * Math.cos(beta);
  let newY = y0 + (y - y0) * Math.sin(beta);

  return { newX, newY };
};

const reverseRotating = (x, y, x0, y0, alpha) => {
  let beta = Math.atang(y - y0) / (x - x0) + alpha;

  let newX = x0 + (x - x0) / Math.cos(beta);
  let newY = y0 + (y - y0) / Math.sin(beta);

  return { newX, newY };
};
