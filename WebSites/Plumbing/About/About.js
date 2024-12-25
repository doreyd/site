import React from "react";
import styles from "./About.module.css";

export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles['inside-wrapper']}>

                <div className={styles['right-text']}>
                    <div className={styles['right-text-title']}>
                        Trusted <span style={{ color: '#1b3ce0' }}>Plumbing</span> and <span style={{ color: '#1b3ce0' }}>Repair</span> Services

                    </div>
                    <div className={styles['right-text-content']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className={styles['right-text-button-wrapper']}>
                        {/* <div className={styles['right-text-button']}>
                            Get A Quote
                        </div> */}
                        <img src='/portfolio/plumbing-results.png' className={styles.results} />
                    </div>

                </div>
                <img src='/portfolio/plumbing-img-2.png' className={styles.img} />
            </div>
        </div>
    );
}
