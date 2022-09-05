import React from "react";
import styles from "./Project.module.css";
import Description from "./Description";

export default function Project(props) {
  const style = props.stye ? props.style : {};
  return (
    <div className={styles.project}>
      {props.left ? null : (
        <div className={styles["illustration-horizontal"]} style={style}>
          {props.children}
        </div>
      )}

      <Description
        linkto={props.linkto}
        time={props.time}
        experience={props.experience}
        left={props.left}
        title={props.title}
        description={props.description}
        techs={props.techs}
        children={props.children}
      />
      {!props.left ? null : (
        <div className={styles["illustration-horizontal"]} style={style}>
          {props.children}
        </div>
      )}
    </div>
  );
}
