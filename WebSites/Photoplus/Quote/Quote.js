import React from "react";
import styles from "./Quote.module.css";
import { useRef } from "react";
import useScrollHook2 from "../../../Hooks/useScrollHook2";

export default function Quote() {
    const homeRef = useRef(null);
    useScrollHook2(homeRef, "quote");
    return (
        <div className={styles.quote} id='quote' ref={homeRef}>
            <div className={styles['inside-wrapper']}>
                <img src='/portfolio/photoplus-offer-1.png' className={styles.img} />
                <img src='/portfolio/photoplus-offer-2.png' className={styles.img} />
                <img src='/portfolio/photoplus-offer-3.png' className={styles.img} />


            </div>
        </div>
    );
}
