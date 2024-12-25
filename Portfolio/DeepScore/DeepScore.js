import React from "react";
import Project from "../Project/Project";
import Dnn from "./Dnn/Dnn";

export default function DeepScore() {
  const description = (
    <span>
      Lead the development and implementation of <b>"Deep Score"</b> a{" "}
      <b>Machine Learning Neural Network</b> feature to assist loan officers in
      assessing the risk profile of clients. Once the model trained and tuned,
      results were ranging from <b>79-83% accuracy</b>, with an average
      false-positive rate of 5.5%. This feature was an add-on to the BI
      application. The <b>model was built from scratch using Python</b> and the
      hyper parameters were controlled by a{" "}
      <b>User Interface built in ReactJS</b>.
    </span>
  );

  const techs =
    "JavaScript, CSS, NodeJS, Python, Numpy, Pandas, Matplotlib, VScode, Git";

  return (
<a href='https://blubuk.com'>   
      <Project
        title="Full-Stack  Developer"
        experience="@ BluBuk"
        time=""
        description={description}
        techs={techs}
        left={false}
      >
        <Dnn />
      </Project>
   </a>
  );
}
