import React from "react";
import Project from "../Project/Project";
import SvgAnimation from "./SvgAnimation";

export default function Analytics() {
  const description = (
    <span>
      Developed <b>"Power Analytics"</b> a front-end, highly customized & user
      friendly <b>Business Intelligence Solution, in React/Redux </b>. Power
      Analytics allows for{" "}
      <b>real time data extraction, transformation and loading </b>
      from different <b>SQL and NoSQL databases</b> sources, along with
      visualization, automatic charts, dashboard and report generation.
    </span>
  );
  const techs =
    "JavaScript, CSS, React/Redux, SQL, MongoDB, Scalar Vector Graphics (SVG), VScode, Git";
  return (
<a href='https://blubuk.com'>
      <Project
        title="Business Intelligence Interface"
        experience=""
        time=""
        description={description}
        techs={techs}
        left={true}
      >
        <SvgAnimation />
      </Project>
</a>
   
  );
}
