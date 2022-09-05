export default function useGradient(elemsState, elemID) {
  const {
    linearFillUrl,
    radialFillUrl,
    linearStrokeUrl,
    radialStrokeUrl,
    strokegradient,
    fillgradient,
    fill,
    stroke,
    opacity,
    angle,
  } = elemsState[elemID] ? elemsState[elemID] : {};

  let fillID = fill;
  if (fillgradient === "linear") fillID = linearFillUrl;
  if (fillgradient === "radial") fillID = radialFillUrl;

  let strokeID = stroke;
  if (strokegradient === "linear") strokeID = linearStrokeUrl;
  if (strokegradient === "radial") strokeID = radialStrokeUrl;

  return {
    fillID,
    strokeID,
    opacity,
    angle,
  };
}
