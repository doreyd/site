import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Menu.module.css";

import MenuButton from "./MenuButton.js";

export default function Menu() {
  const dispatch = useDispatch();

  const buttons = [
    "Home",
    "Experience",
    "Work",
    "Principles",
    "Mail",
  ];

  const clickHandler = (thisSection) => {
    if (thisSection === "Mail") dispatch({ type:"TOGGLE_MAIL" });
    else dispatch({ type: "SELECT_SECTION", payload: thisSection });
  };

  return (
    <nav className={styles.menu}>
      <ul className={styles["menu-list"]}>
        {buttons.map((thisSection) => {
          return (
            <MenuButton
              key={thisSection}
              clickHandler={clickHandler.bind(null, thisSection)}
              thisSection={thisSection}
            />
          );
        })}
      </ul>
    </nav>
  );
}
