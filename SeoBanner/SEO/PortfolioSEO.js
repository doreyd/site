import React, { useRef } from "react";
import styles from "./Portfolio.module.css";

import SEO from "./SEO";

import SEOsmall from "./SEOsmall";
import useScrollHook from "../../Hooks/useScrollHook";

export default function PortfolioSEO() {
  const refExp = useRef(null);
  useScrollHook(refExp, "Experience");

  return (
    <div
      className={styles.section}
      style={{ marginTop: "4rem" }}
      id="Experience"
      ref={refExp}
    >
      <div className={styles.title}>SERVICES OFFERED</div>
      <div className={styles.portfolio}>
        <SEO />
        <SEOsmall />
      </div>
    </div>
  );
}
