import React from "react";

import styles from "./TopIcons.module.css";
import Add from "./Add";
import Edit from "./Edit";
import Delete from "./Delete";
import Search from "./Search";
import Code from "./Code";
import Show from "./Show";

export default function TopIcons(props) {
  return (
    <div className={styles["menu"]}>
      <Add />
      <Search />
      <Edit />
      <Show />
      <Delete />
      {/* <Code /> */}
    </div>
  );
}
