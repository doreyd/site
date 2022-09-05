import React from "react";
import styles from "./Home.module.css";

const icons = [
  "Html5.jpg",
  "CSS3.jpg",
  "JS.jpg",
  "TS.jpg",
  "python.jpg",
  "react.jpg",
  "redux.jpg",
  "json.jpg",
  "Sass.jpg",
  "jQuery.jpg",
  "Bootstrap.jpg",
  "git.jpg",
  "vscode.jpg",
  "NodeJS.jpg",
  "express.jpg",
  "Next.jpg",
  "MongoDB.jpg",
  "SQL.jpg",
  "gcp.jpg",
  "API.jpg",
  "GraphQL.jpg",
  "Firebase.jpg",
  "MERN.jpg",
  "linux.jpg",
];

export default function Icons() {
  return (
    <>
      <div className={styles.title2}>Technical Skills</div>
      <div className={styles.icons}>
        {icons.map((icon, index) => {
          return (
            <img
              key={Math.random()}
              src={`/icons/${icon}`}
              className={styles["icon-image"]}
              style={{
                animationDelay: `${200 + index * 50}ms`,
                transition: "all linear 0.2s",
              }}
            />
          );
        })}
      </div>
    </>
  );
}
