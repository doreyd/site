import React, { useRef, useEffect } from "react";

import Icons from "./Icons";
import styles from "./Home.module.css";

import Logo from "./Logo/Logo";
import Menu from "../Menu/Menu";
import MenuHorizontal from "../Menu/MenuHorizontal";
import useScrollHook from "../Hooks/useScrollHook";
import SeoBanner from '../SeoBanner/SeoBanner'

export default function Home() {
  const homeRef = useRef(null);

  useScrollHook(homeRef, "Home");

  return (
    <section className={styles.home} id="Home" ref={homeRef}>
      <Logo
        color="black"
        style={{
          position: "absolute",
          left: "20px",
          top: "20px",
        }}
      />
      <Menu />
      <MenuHorizontal />
      <div className={styles["name-and-title"]}>
        <div className={styles.hi}>Hi, my name is</div>
        <div className={styles.name}>Doreyd Mehila</div>
        <div className={styles.title}>I'm a Full-Stack Web Developer. </div>
        <div className={styles.description}>
          Based in Edmonton, Alberta, Canada, I enjoy building great Interactive
          & Responsive Digital Platforms, Single Page Applications, WebApps and
          Websites.
        </div>
      </div>

      <Icons />
      {/* <SeoBanner /> */}
    </section>
  );
}
