// import React, { useEffect, useState } from "react";
import styles from "./FullStock.module.css";
// import paths from "./SVGs/paths";
import { useSelector, useDispatch } from "react-redux";

export default function SvgAnimation({ setModalOn, siteName }) {
  const { portfolio } = useSelector(state => state)
  const dispatch = useDispatch()

  const openModal = (site) => {
    dispatch({ type: 'SELECT_SITE', payload: site })
    setModalOn(true)
  }


  return (
    <div
      key={siteName}
      className={styles.project}
      onClick={openModal.bind(this, siteName)}
    // style={{ maxHeight: "300px", maxWidth: "300px" }}
    >
      <img src={`/portfolio/${siteName}0.png`} className={styles.img1} />
    </div>
  );
}
