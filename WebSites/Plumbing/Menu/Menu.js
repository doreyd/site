import React from "react";
import styles from "./Menu.module.css";

export default function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles['logo-wrapper']}>
                <img src='/portfolio/plumbing-logo.png' className={styles.logo} />
                <div className={styles['logo-text']}><div className={styles['logo-name']}>  BlueWrench </div>Plumbing</div>
            </div>
            <div className={styles.buttons}>
                <a href='/plumbing'>
                    <div className={styles.button}>
                        Home
                    </div>
                </a>
                <a href='/plumbing/about'>
                    <div className={styles.button}>
                        About
                    </div>
                </a>
                <a href='/plumbing/services'>
                    <div className={styles.button}>
                        Services
                    </div>
                </a>
                <a href='/plumbing/quote'>
                    <div className={styles.button}>
                        Get A Quote
                    </div>
                </a>
            </div>
        </div>
    );
}
