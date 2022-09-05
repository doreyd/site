const generateNeurones = (nn, config) => {
  const { rightMargin, height, hSpace, r } = config;

  let d = height / Math.max(...nn);
  let dots = [];
  nn.forEach((el, index) => {
    let rightAdjust = index === nn.length - 1 ? -hSpace * 0.4 : 0;
    let thisLayerDots = [];
    if (el % 2 === 0) {
      let newEl = el / 2;
      for (let i = 0; i < newEl; i++) {
        thisLayerDots.push([
          rightMargin + index * hSpace + rightAdjust,
          height / 2 + d / 2 + i * d ,
        ]);
        thisLayerDots.push([
          rightMargin + index * hSpace + rightAdjust,
          height / 2 - d / 2 - i * d ,
        ]);
      }
    } else {
      thisLayerDots.push([
        rightMargin + index * hSpace + rightAdjust,
        height / 2 ,
      ]);
      let newEl2 = (el - 1) / 2;
      for (let i = 0; i < newEl2; i++) {
        thisLayerDots.push([
          rightMargin + index * hSpace + rightAdjust,
          height / 2 + (i + 1) * d ,
        ]);
        thisLayerDots.push([
          rightMargin + index * hSpace + rightAdjust,
          height / 2 - (i + 1) * d ,
        ]);
      }
    }
    dots.push(thisLayerDots);
  });
  return dots;
};

export default generateNeurones;
