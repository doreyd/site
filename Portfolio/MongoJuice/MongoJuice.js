import React from "react";
import Project from "../Project/Project";
import SvgAnimation from "./SvgAnimation";

export default function MongoJuice() {
  const description = (
    <span>
      Developed a <b>MongoDB Graphic User Interface</b> that allows you to view
      all your databases, collections and documents, rename, delete or update
      any of them as well as adding new ones with ease. Mongo Juice allows the
      user to{" "}
      <b>
        perform all CRUD operations on any NoSQL database by just clicking away
      </b>
      .
    </span>
  );
  const techs = "JavaScript, CSS, NextJS, MongoDB, VScode, Git";

  return (
    <Project
      linkto="/mongojuice"
      title="Mongo Juice"
      experience="Click to view"
      description={description}
      techs={techs}
      left={false}
    >
      <SvgAnimation />
    </Project>
  );
}
