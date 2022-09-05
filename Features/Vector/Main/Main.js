import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Main.module.css";
import Menu from "../Components/Menu/Menu";

import Modes from "../Components/Modes/Modes";
import SvgCanvas from "../Components/SvgCanvas/SvgCanvas";

import Help from "../Components/Help/Help";
import Sorry from "../Components/Sorry/Sorry";

export default function Main() {
  const { showHelp } = useSelector((state) => state);

  return (
    <div className={styles["main-container"]}>
      <SvgCanvas />
      <Menu />
      <Modes />
      {showHelp && <Help />}
      <Sorry />
    </div>
  );
}
