import React from "react";
import styles from "./Services.module.css";
import { useRef } from "react";
import useScrollHook2 from "../../../Hooks/useScrollHook2";

export default function Services() {

    const homeRef = useRef(null);
    useScrollHook2(homeRef, "services");
    return (
        <div className={styles.services} id='services' ref={homeRef}>
            <div className={styles['inside-wrapper']}>
                <img src='/portfolio/photoplus-img-2.png' className={styles.img} />


            </div>
        </div>
    );
}
