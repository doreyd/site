import React from "react";
import styles from "./Home.module.css";
import About from '../About/About';
import { useRef } from "react";
import useScrollHook2 from "../../../Hooks/useScrollHook2";

export default function Home() {

    const homeRef = useRef(null);

    useScrollHook2(homeRef, "home");

    return (
        <div className={styles.home} id='home' ref={homeRef}>
            <img src='/portfolio/photoplus-img-1.png' className={styles.img} />
            <About />

        </div>
    );
}
