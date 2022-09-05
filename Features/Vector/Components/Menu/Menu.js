import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Menu.module.css";
import SVG from "./svgBtns/svgBtn";

export default function Menu(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { sectionSelected, lastSelected } = useSelector((state) => state);

  const closeMailHandler = () => {
    dispatch({ type: "SELECT_SECTION", payload: lastSelected });
    router.push("/#" + lastSelected);
  };

  const saveSVG = () => {
    dispatch({ type: "SET_PEN", payload: "" });
    dispatch({ type: "SET_CURSOR", payload: "" });
    dispatch({ type: "UPDATE_SVG_HTML" });
  };

  const showHelp = () => {
    dispatch({ type: "SHOW_HELP" });
  };

  return (
    <div className={styles.menu}>
      <div
        onClick={closeMailHandler}
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginRight: "3rem",
          marginLeft: "1rem",
          cursor: "pointer",
        }}
      >
        <svg
          viewBox="0 0 48 48"
          height="30px"
          width="30px"
          fill="white"
          style={{
            position: "relative",
            margin: "0.38rem 0rem",
          }}
        >
          <path d="M8 42V18L24.1 6 40 18v24H28.3V27.75h-8.65V42Zm3-3h5.65V24.75H31.3V39H37V19.5L24.1 9.75 11 19.5Zm13-14.65Z" />
        </svg>
      </div>
      <SVG id="Circle" />
      <SVG id="Square" />
      <SVG id="Cursor" viewBox="0 0 42 42" />
      <SVG id="Pen" viewBox="0 0 42 42" />
      <SVG id="Back" size="30" viewBox="0 0 16 16" />
      <SVG clickHandler={saveSVG} id="Export" size="34" viewBox="0 0 48 48" />
      <SVG clickHandler={showHelp} id="Help" size="30" viewBox="0 0 48 48" />
    </div>
  );
}
