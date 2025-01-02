import React from "react";
import styles from "./Project.module.css";
import Link from "next/link";
export default function Description(props) {
  return (
    <div className={styles.description}>
      <div className={styles.title}>
        <span style={{ position: "relative", top: "0.6rem" }}>
          {props.title}
        </span>
        {props.linkto ? (
          <Link href={props.linkto}>
            <span className={styles.linkto}>{props.experience}</span>
          </Link>
        ) : (
          <span className={styles.company}>{props.experience}</span>
        )}
      </div>
      <div className={styles.illustration}>{props.children}</div>
      <div className={styles.text}>
        {/* <div className={styles.time}>{props.time}</div> */}
        {props.description}
      </div>
      <div className={styles.technologies}>
        <div className={styles["tech-used"]}>Technologies Used</div>
        {props.techs}
      </div>
    </div>
  );
}
