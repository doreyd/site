import React, { useState, useEffect, useMemo } from "react";
import styles from "./Dnn.module.css";
import newDNN from "./newDNN";

export default function Dnn(props) {
  let lineColor = "lightgrey";
  let dotColor = "rgb(1,25,48)";
  let r = 2;

  let duration = 3000;

  const genCircle = (x, y, r, stroke, sw, fill, index) => {
    return (
      <circle
        key={Math.random()}
        cx={x}
        cy={y}
        stroke={stroke}
        strokeWidth={sw}
        className={styles.dot}
        fill={dotColor}
        style={{ animationDelay: `${(index * duration) / 6}ms` }}
      />
    );
  };

  const genLine = (x1, y1, x2, y2, stroke, sw, index) => {
    return (
      <line
        key={Math.random()}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        className={styles.line}
        style={{
          animationDelay: `${(index * duration) / 6}ms`,
        }}
      />
    );
  };

  return (
    <svg id="svg" viewBox="0 0 100 100" className={styles.svg}>
      {newDNN.map((layerDots, index) => {
        if (index !== 0) {
          return layerDots.map((oneDot) => {
            return newDNN[index - 1].map((backDot) => {
              return genLine(
                oneDot[0],
                oneDot[1],
                backDot[0],
                backDot[1],
                lineColor,
                0.5,
                index
              );
            });
          });
        }
      })}
      {newDNN.map((layerDots, index) => {
        return layerDots.map((oneDot) => {
          return genCircle(
            oneDot[0],
            oneDot[1],
            r,
            lineColor,
            0.5,
            dotColor,
            index
          );
        });
      })}
    </svg>
  );
}
