import React from "react";
import Project from "../Project/Project";
import SvgAnimation from "./SvgAnimation";

export default function VectorPlus() {
  const description = (
    <span>
      Developed a versatile and easy to use{" "}
      <b>Scalable Vector Graphic drawing application</b> that uses vector curves
      and shapes{" "}
      <b>
        to build and design objects going from simple icons to logos, and more
        complex illustrations
      </b>
      . The advantage of these SVGs is that they{" "}
      <b>can be edited and resized without limitation or loss of quality</b>.
      The drawing tools allow you to easily create and edit shapes, with the
      help of an intuitive user interface.{" "}
      <b>Once done, you can dowload your SVG creation with one click</b>. You
      can then use it anywhere you want.
    </span>
  );
  const techs =
    "JavaScript, CSS, NodeJS, NextJS, Scalar Vector Graphics (SVG), VScode, Git";
  return (
    <Project
      style={{ background: "red" }}
      title="Vector Plus"
      linkto="/vectorplus"
      experience="Click to view"
      description={description}
      techs={techs}
      left={true}
    >
      <SvgAnimation />
    </Project>
  );
}
