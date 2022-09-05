import React from "react";
import styles from "./Project.module.css";
import Link from "next/link";
export default function Description(props) {
  return (
    <div className={styles.description}>
      <div className={styles.title}>
        <div
          className={styles.title2}
          data-tooltip={!props.linkto ? props.experience : ""}
        >
          {props.title}{" "}
          {props.linkto ? (
            <Link href={props.linkto}>
              <span className={styles.linktolarge}>{props.experience}</span>
            </Link>
          ) : null}
        </div>
        {props.linkto ? (
          <Link href={props.linkto}>
            <span className={styles.linkto}>{props.experience}</span>
          </Link>
        ) : null}
      </div>

      <div className={styles.illustration}>{props.children}</div>

      <div className={styles.text}>
        <div className={styles.time}>{props.time}</div>
        {props.description}
      </div>
      <div className={styles.technologies}>
        <div className={styles["tech-used"]}>Technologies Used</div>
        {props.techs}
      </div>
    </div>
  );
}
