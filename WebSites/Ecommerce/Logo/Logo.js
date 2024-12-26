import React from "react";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles['logo-wrapper']}>
                logo
            </div>
            <div className={styles.buttons}>
                <div className={styles.button}>
                    Home
                </div>
                <div className={styles.button}>
                    About
                </div>
                <div className={styles.button}>
                    Get A Quote
                </div>
                <div className={styles.button}>
                    Contact Us
                </div>
            </div>
        </div>
    );
}
