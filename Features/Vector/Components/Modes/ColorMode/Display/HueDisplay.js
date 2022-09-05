import React, { useEffect, useRef } from "react";

import styles from "./ColorDisplay.module.css";

export default function HueDisplay(props) {
  const canvasRef = { useRef };

  const fillColors = (ctx) => {
    if (ctx) {
      for (let i = 0; i < 360; i++) {
        ctx.fillStyle = `hsl(${i * 1.25},100%,50%)`;
        ctx.fillRect(i, 0, i + 1, 200);
      }
    }
  };

  useEffect(() => {
    if (canvasRef) {
      const ctx = canvasRef.current.getContext("2d");
      fillColors(ctx);
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} className={styles["color-hue"]} />;
}
