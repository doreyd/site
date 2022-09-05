import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Resume.module.css";

export default function Resume() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { sectionSelected, lastSelected } = useSelector((state) => state);

  // const closeMailHandler = () => {
  //   dispatch({ type: "SELECT_SECTION", payload: lastSelected });
  //   router.push("/#" + lastSelected);
  // };
  return (
    <div className={styles.wrapper}>
      <iframe
        src="resume.pdf"
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100vw",
          height: "100vh",
        }}
      />
      {/* <svg
        viewBox="0 0 48 48"
        onClick={closeMailHandler}
        className={styles.controls}
      >
        <path d="m24 31.3 2.1-2.1-3.7-3.7h9.1v-3h-9.1l3.7-3.7-2.1-2.1-7.3 7.3ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
      </svg> */}
    </div>
  );
}
