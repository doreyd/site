import React, { useRef } from "react";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import useScrollHook from "../Hooks/useScrollHook";

export default function Principles() {
  const color = "rgb(1,25,48)";
  const principlesRef = useRef(null);

  useScrollHook(principlesRef, "Principles");

  return (
    <section className={styles.home} id="Principles" ref={principlesRef}>
      <div className={styles.description}>
        <div className={styles.title}>PRINCIPLES I LIVE BY</div>
        <div className={styles.qualities}>
          <div className={styles.quality}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill={color}
              className={styles.svg}
              style={{ animationDelay: "0s" }}
            >
              <path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V15.2H7V37Zm8-3.6-2.1-2.1 5.15-5.2-5.2-5.2L15 18.8l7.3 7.3Zm9.5.2v-3h11v3Z" />
            </svg>
            <div className={styles.text}>Clean & maintable code</div>
          </div>
          <div className={styles.quality}>
            <div
              className={styles.svg}
              style={{ animationDelay: ".5s", top: "-5%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                fill={color}
                className={styles.laptop}
              >
                <path d="M2.85 40q-1.2 0-2.025-.875T0 37h7.05q-1.2 0-2.1-.9-.9-.9-.9-2.1V9q0-1.2.9-2.1.9-.9 2.1-.9h33.9q1.2 0 2.1.9.9.9.9 2.1v25q0 1.2-.9 2.1-.9.9-2.1.9H48q0 1.25-.875 2.125T45 40ZM24 38.9q.7 0 1.2-.5t.5-1.2q0-.7-.5-1.2t-1.2-.5q-.7 0-1.2.5t-.5 1.2q0 .7.5 1.2t1.2.5ZM7.05 34h33.9V9H7.05v25Zm0 0V9v25Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                fill={color}
                className={styles.phone}
              >
                <path d="M13 46q-1.2 0-2.1-.9-.9-.9-.9-2.1V5q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v38q0 1.2-.9 2.1-.9.9-2.1.9Zm0-7.5V43h22v-4.5Zm11 3.75q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425-.425.425-.425 1.075 0 .65.425 1.075.425.425 1.075.425ZM13 35.5h22v-26H13Zm0-29h22V5H13Zm0 32V43Zm0-32V5v1.5Z" />
              </svg>
            </div>
            <div className={styles.text}>Modern responsive design</div>
          </div>
          <div className={styles.quality}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill={color}
              className={styles.svg}
              style={{ animationDelay: "1s", padding: ".5rem" }}
            >
              <path d="M4 13.5q1.2-4.25 6.55-7.875T23.95 2q4.85 0 9.35 1.8t8.15 4.8V4.25h2.5v9.5h-9.5v-2.5h6.25q-3.45-3-7.8-4.875T23.95 4.5q-7.15 0-11.6 3-4.45 3-5.7 6ZM21.1 46q-.85 0-1.6-.325-.75-.325-1.3-.875L7.9 34.5l2.8-2.9q.7-.7 1.575-1.075T14.1 30.4l3.9.9V15q0-2.1 1.45-3.55Q20.9 10 23 10q2.1 0 3.55 1.45Q28 12.9 28 15v8.6h1.3q.25 0 .45.1t.45.2l7.4 3.6q1.2.55 1.775 1.775.575 1.225.325 2.525l-1.8 10.9q-.25 1.45-1.4 2.375T33.9 46Zm-.4-3h14.05l2.15-12.45L27.75 26H25V15q0-.9-.55-1.45Q23.9 13 23 13q-.9 0-1.45.55Q21 14.1 21 15v19.95l-7.7-1.65-1.15 1.15Zm14.05 0H20.7h14.05Z" />
            </svg>
            <div className={styles.text}>Intuitive & User Friendly UI/UX</div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles["logo-wrapper"]}>
          <Logo
            color="white"
            size="140"
            style={{
              position: "relative",
            }}
          />
        </div>
        {/* <div className={styles.opendata}>Open Data</div> */}
        <div className={styles.developed}>Designed, Developed & Hosted By</div>
        <div className={styles.doreyd}>
          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            // fill="transparent"
            fill="white"
            className={styles.logo}
            height={20}
            width={20}
          >
            <path d="M24 44 6 33.7V13.75L24 4l18 9.75V33.7Zm-5.7-24.9q1.15-1.15 2.625-1.875Q22.4 16.5 24 16.5t3.075.725q1.475.725 2.625 1.875l7.65-4.5L24 7.5l-13.35 7.1Zm4.2 20.6v-8.35q-2.6-.7-4.3-2.725Q16.5 26.6 16.5 24q0-.5.05-1.05t.3-1.2L9 17.1v14.85ZM24 28.5q1.9 0 3.2-1.325Q28.5 25.85 28.5 24q0-1.9-1.3-3.2-1.3-1.3-3.2-1.3-1.85 0-3.175 1.3Q19.5 22.1 19.5 24q0 1.85 1.325 3.175Q22.15 28.5 24 28.5Zm1.5 11.2L39 31.95V17.1l-7.85 4.65q.25.7.3 1.225.05.525.05 1.025 0 2.6-1.7 4.625t-4.3 2.725Z" />
          </svg>
          <div className={styles["doreyd-title"]}>doreydmehila.com</div>
        </div>
      </div>
    </section>
  );
}
