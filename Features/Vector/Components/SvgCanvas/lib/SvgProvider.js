import React from "react";
import Circle from "../SvgTypes/Circle";
import Square from "../SvgTypes/Square";
import Triangle from "../SvgTypes/Triangle";
import Laptop from "../SvgTypes/Laptop";
import Cursor from "../SvgTypes/Cursor/Cursor";
import Pen from "../SvgTypes/Pen/Pen";
import Text from "../SvgTypes/Text";

export default function SvgProvider(props) {
  switch (props.type) {
    case "Circle":
      return <Circle {...props} />;
    case "Square":
      return <Square {...props} />;
    case "Triangle":
      return <Triangle {...props} />;
    case "Laptop":
      return <Laptop {...props} />;
    case "Cursor":
      return <Cursor {...props} />;
    case "Pen":
      return <Pen {...props} />;
      case "Text":
        return <Text {...props} />;
    default:
      return null;
  }
}
