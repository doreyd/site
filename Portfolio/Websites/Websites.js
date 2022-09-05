import React from "react";
import Project from "../Project/Project";
import SvgAnimation from "./SvgAnimation";

export default function Analytics() {
  const description = (
    <span>
      Developed and maintained <b>responsive, performant, and robust code</b>{" "}
      for client website primarily using HTML, CSS, Sass, JavaScript, React,
      NodeJS and jQuery. Provided <b>domain registration</b> and renewal,{" "}
      <b>secure hosting</b> on Google Cloud Platform,{" "}
      <b>and on-demand Restful API development</b> and deployment. Created
      databases{" "}
      <b>
        User Interfaces for Cloud Storage, Duplication and Retrieval of data
      </b>
      .
    </span>
  );

  const techs =
    "JavaScript, CSS, React/Redux, NodeJS, NextJS, SQL, MongoDB, Scalar Vector Graphics (SVG), VScode, Git";
  return (
    <a href="https://blubuk.com">
      <Project
        title="Website Developer"
        experience="@ BluBuk"
        time="NOVEMBER 2019 - MARCH 2020"
        description={description}
        techs={techs}
        left={false}
      >
        <SvgAnimation />
      </Project>
    </a>
  );
}
