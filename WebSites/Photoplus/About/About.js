import React from "react";
import styles from "./About.module.css";
import { useRef } from "react";
import useScrollHook2 from "../../../Hooks/useScrollHook2";

export default function About() {
    const homeRef = useRef(null);
        useScrollHook2(homeRef, "about");
    return (
        <div className={styles.about} id='about' ref={homeRef}>
            <h1>Where it all started...</h1>
            <div className={styles['inside-wrapper']}>

               
                <img src='/portfolio/photoplus-small-1.png' className={styles.img} />
                <img src='/portfolio/photoplus-small-2.png' className={styles.img} />
                <img src='/portfolio/photoplus-small-3.png' className={styles.img} />
                <img src='/portfolio/photoplus-small-4.png' className={styles.img} />
                <img src='/portfolio/photoplus-small-5.png' className={styles.img} />
                <img src='/portfolio/photoplus-small-6.png' className={styles.img} />
                <img src='/portfolio/photoplus-small-7.png' className={styles.img} />
                <img src='/portfolio/photoplus-small-8.png' className={styles.img} />
                <img src='/portfolio/photoplus-small-9.png' className={styles.img} />
            </div>
        </div>
    );
}
