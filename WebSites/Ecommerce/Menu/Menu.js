import React from "react";
import styles from "./Menu.module.css";

import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Menu() {
    const router = useRouter();

    return (
        <div className={styles.menu} style={{ background: '#232f3e', color: 'white' }}>
            <div className={styles['logo-wrapper']}>
                <img src='/portfolio/plumbing-logo.png' className={styles.logo} />
                <div className={styles['logo-text']}><div className={styles['logo-name']}>  BlueWrench </div>Plumbing</div>
            </div>
            <div className={styles.buttons}>

                <Link href="/plumbing">
                    <div className={`${router.pathname === '/plumbing' ? styles['button-selected'] : styles.button}`}>
                        Home </div>
                </Link>
                <Link href="/plumbing/about">
                    <div className={`${router.pathname === '/plumbing/about' ? styles['button-selected'] : styles.button}`}>
                        About </div>
                </Link>
                <Link href="/plumbing/quote">
                    <div className={`${router.pathname === '/plumbing/quote' ? styles['button-selected'] : styles.button}`}>
                        Get A Quote</div>
                </Link>

            </div>
        </div>
    );
}
