'use client'

import React from "react";
import styles from "./Menu.module.css";
// import { useRouter } from 'next/router';
import Link from 'next/link';
// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Menu() {
    const dispatch = useDispatch()

    const clickHandler = (thisSection) => {
        // console.log(thisSection)
        dispatch({ type: "SELECT_SECTION_PHOTOPLUS", payload: thisSection });
    };

    const { sectionSelectedPhotoplus } = useSelector((state) => state);
    // console.log(sectionSelectedPhotoplus)

    return (
        <div className={styles.menu} style={{ background: `${sectionSelectedPhotoplus === 'home' ?  'rgba(4, 35, 72, 0.42)': ' rgba(4, 35, 72, 0.9)'}` }}>
            <div className={styles['logo-wrapper']}>

                <div className={styles['logo-text']}>
                    <div className={styles['logo-name']}>  photo </div>
                    <div className={styles['logo-plus']}>  + </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <Link href="/photoplus#home">
                    <div onClick={clickHandler.bind('home')} className={`${sectionSelectedPhotoplus === 'home' ? styles['button-selected'] : styles.button}`}>
                        HOME </div>
                </Link>

                <Link href="/photoplus#about">
                    <div onClick={clickHandler.bind('about')} className={`${sectionSelectedPhotoplus === 'about' ? styles['button-selected'] : styles.button}`}>
                        MY BEGININGS </div>
                </Link>
                <Link href="/photoplus#services">
                    <div onClick={clickHandler.bind('services')} className={`${sectionSelectedPhotoplus === 'services' ? styles['button-selected'] : styles.button}`}>
                        ABOUT ME</div>
                </Link>
                <Link href="/photoplus#quote">
                    <div onClick={clickHandler.bind('quote')} className={`${sectionSelectedPhotoplus === 'quote' ? styles['button-selected'] : styles.button}`}>
                        MY PRICES </div>
                </Link>

            </div>
        </div >
    );
}
