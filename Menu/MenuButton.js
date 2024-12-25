import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import paths from "./paths";
import styles from "./Menu.module.css";

import Link from "next/link";

export default function MenuButton({
  thisSection,
  clickHandler,
  size,
  horizontal,
}) {
  const { sectionSelected } = useSelector((state) => state);

  const classApplied =
    sectionSelected === thisSection
      ? `${styles["menu-image"]} ${styles["active-menu-image"]} `
      : `${styles["menu-image"]}  `;

  const hrefBuilder = (section) => {
    if (section === "Resume") return "/resume";
    return "#" + section;
  };

  return (
    <li className={styles["menu-item"]} key={Math.random()}>
      <Link href={hrefBuilder(thisSection)} passHref>
        {thisSection === "Resume" ? (
          <a target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              width="30px"
              viewBox="0 0 48 48"
              onClick={clickHandler}
              className={horizontal ? "menu-image2" : classApplied}
            >
              {paths[thisSection]}
            </svg>
          </a>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            width="30px"
            viewBox="0 0 48 48"
            onClick={clickHandler}
            className={horizontal ? "menu-image2" : classApplied}
          >
            {paths[thisSection]}
          </svg>
        )}
      </Link>
    </li>
  );
}
