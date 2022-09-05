import { useState } from "react";

export default function useColorState() {
  const [hue, setHue] = useState(360);
  const [saturation, setSaturation] = useState(100);
  const [lightness, setLightness] = useState(50);
  const [opacity, setOpacity] = useState(100);

  const pickShade = (shade) => {
    setSaturation(100);
    setLightness(shade);
  };
  return {
    hue,
    setHue,
    saturation,
    setSaturation,
    lightness,
    setLightness,
    opacity,
    setOpacity,
    pickShade,
  };
}
