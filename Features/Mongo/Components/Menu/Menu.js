import React from "react";
import { useSelector } from "react-redux";
import styles from "./Menu.module.css";
import DataMenu from "./DataMenu/DataMenu";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <img src={"/mongodbLogo.jpg"} className={styles["app-logo"]} />
      <div className={styles["app-name"]}>Mongo Juice</div>
      <div className={styles["app-name-short"]}>MJ</div>
      <DataMenu />
    </div>
  );
}
