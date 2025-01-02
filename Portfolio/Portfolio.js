import React, { useRef } from "react";
import styles from "./Portfolio.module.css";

import Analytics from "./Analytics/Analytics";
import DeepScore from "./DeepScore/DeepScore";
import Websites from "./Websites/Websites";
import FullStock from "./FullStock/FullStock";
import useScrollHook from "../Hooks/useScrollHook";

export default function Portfolio() {
  const refExp = useRef(null);
  useScrollHook(refExp, "Experience");

  return (
    <div
      className={styles.section}
      style={{ marginTop: "4rem" }}
      id="Experience"
      ref={refExp}
    >
      <div className={styles.title}>PAST BIG PROJECTS</div>
      <div className={styles.portfolio}>
        <Websites />
        <Analytics />
        <DeepScore />
        <FullStock />
      </div>
    </div>
  );
}
