import React, { useEffect, useState, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import styles from "./Menu.module.css";

import MenuButton from "./MenuButton.js";

export default function MenuHorizontal() {
  const dispatch = useDispatch();
  const [y, setY] = useState(0);
  const [visible, setVisible] = useState(true);

  const { mailOn } = useSelector((state) => state);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setVisible(true);
      } else if (y < window.scrollY) {
        setVisible(false);
      }
      setY(window.scrollY);
    },
    [y]
  );
  const buttons = [
    "Home",
    "Experience",
    "Work",
    "Principles",
    "Mail",
  ];
  useEffect(() => {
    if (window) {
      setY(window.scrollY);
      window.addEventListener("scroll", handleNavigation);
      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }
  }, [handleNavigation]);

  const clickHandler = (thisSection) => {
    if (thisSection === "Mail") dispatch({ type:"TOGGLE_MAIL" });
    else dispatch({ type: "SELECT_SECTION", payload: thisSection });
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={styles["horizontal-wrapper"]}>
      {buttons.map((thisSection) => {
        return (
          <MenuButton
            key={thisSection}
            horizontal={true}
            clickHandler={clickHandler.bind(null, thisSection)}
            thisSection={thisSection}
          />
        );
      })}
    </div>
  );
}
