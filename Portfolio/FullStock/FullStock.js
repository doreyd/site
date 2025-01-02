import React from "react";
import Project from "../Project/Project";
import SvgAnimation from "./SvgAnimation";

export default function FullStock() {
  const description = (
    <span>
      Developed <b>"ShipSmart",</b> a Full-Stack{" "}
      <b>Inventory Management System</b> using React & NodeJS technology, for an
      Oil & Gas Gasket supplier company. The system is{" "}
      <b>currently being used by all 3 warehouses</b> the company owns and
      operates, and has{" "}
      <b>
        resulted in much better inventory management and higher order accuracy
      </b>
      . By automating the emailing of all the necessary Material Test Reports
      (MTR), Functional Test Reports (FTR), drawings and specifications for the
      products being shipped, ShipSmart{" "}
      <b>
        {" "}
        also solved a recurring documentation mismatch problem the company had
        been facing until then
      </b>
      .
    </span>
  );

  const techs = "JavaScript, CSS, React/Redux, NodeJS, SQL, VScode, Git";
  return (
    <Project
      title="Inventory Management System"
      experience=""
      time=""
      description={description}
      techs={techs}
      left={true}
    >
      <SvgAnimation />
    </Project>
  );
}
