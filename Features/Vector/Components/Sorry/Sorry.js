import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Sorry.module.css";

export default function Sorry() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { sectionSelected, lastSelected } = useSelector((state) => state);

  const closeMailHandler = () => {
    dispatch({ type: "SELECT_SECTION", payload: lastSelected });
    router.push("/#" + lastSelected);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.txt}> Sorry but your screen is too small.</div>
        <div className={styles.txt} onClick={closeMailHandler}>
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
          Click here to go back to doreydmehila.com
        </div>
      </div>
    </div>
  );
}

