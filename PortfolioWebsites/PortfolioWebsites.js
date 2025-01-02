'use client'

import React, { useRef, useState } from "react";
import styles from "./Portfolio.module.css";

import Analytics from "./Analytics/Analytics";
import DeepScore from "./DeepScore/DeepScore";
import Websites from "./Websites/Websites";
import FullStock from "./FullStock/FullStock";
import Template from "./Template/Template";
import useScrollHook from "../Hooks/useScrollHook";
import Modal from './Modal/Modal';
import { useSelector } from "react-redux";

export default function Portfolio() {
  const refExp = useRef(null);
  useScrollHook(refExp, "Experience");
  const { portfolio } = useSelector(state => state)

  const [modalOn, setModalOn] = useState(false);

  const portfolioKeys = Object.keys(portfolio)

  return (
    <div
      className={styles.section}
      style={{ marginTop: "4rem" }}
      id="Experience"
      ref={refExp}
    >
      <div className={styles.title}>PORTFOLIO</div>
      <div className={styles.portfolio}>
        {modalOn && <Modal modalOn={modalOn} setModalOn={setModalOn} />}

        {portfolioKeys.map(siteName => {
          return <Template key={siteName} siteName={siteName} setModalOn={setModalOn} />
        })}
        {/* {portfolioKeys.map(siteName => {
          return <Template siteName={siteName} setModalOn={setModalOn} />
        })} */}
      </div>
    </div>
  );
}
