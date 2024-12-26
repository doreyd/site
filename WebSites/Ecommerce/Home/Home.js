import React from "react";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles['inside-wrapper']}>

                <img src='/portfolio/plumbing-img-1.png' className={styles.img} />

                <div className={styles['right-text']}>
                    <div className={styles['right-text-title']}>
                        We fix all your <span style={{ color: '#1b3ce0' }}>Plumbing</span> problems
                    </div>
                    <div className={styles['right-text-content']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className={styles['right-text-button-wrapper']}>
                        <a href='/plumbing/quote'>
                            <div className={styles['right-text-button']}>
                                Get A Quote
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
