import React, { useEffect, useRef, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Portfolio.module.css";

import VectorPlus from "./VectorPlus/VectorPlus";
import MongoJuice from "./MongoJuice/MongoJuice";
import useScrollHook from "../Hooks/useScrollHook";

export default function Portfolio() {
  const refWork = useRef(null);

  useScrollHook(refWork, "Work");

  return (
    <div
      className={styles.section}
      id="Work"
      ref={refWork}
      style={{ marginTop: "4rem" }}
    >
      <div className={styles.title}>SOME FUN PROJECTS</div>
      <div className={styles.portfolio}>
        <VectorPlus />
        <MongoJuice />
      </div>
    </div>
  );
}
