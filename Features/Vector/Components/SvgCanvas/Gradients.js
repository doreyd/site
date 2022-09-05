import React from "react";

import { useSelector } from "react-redux";

export default function Gradients() {
  const gradientsList = useSelector((state) => state.gradientsList);
  const gradients = useSelector((state) => state.gradients);

  // console.log(gradientsList);

  return (
    <defs>
      {gradientsList?.map((id) => {
        if (gradients[id]["type"] === "linear") {
          return (
            <linearGradient {...gradients[id]} id={id}>
              {gradients[id].offSets?.map((offset) => {
                return <stop offset={offset.offset} style={offset.style} />;
              })}
            </linearGradient>
          );
        } else {
          return (
            <radialGradient {...gradients[id]} id={id}>
              {gradients[id].offSets?.map((offset) => {
                return <stop offset={offset.offset} style={offset.style} />;
              })}
            </radialGradient>
          );
        }
      })}
    </defs>
  );
}
