import React from "react";
import styles from "./Footer.module.css";
import Link from 'next/link';
// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Footer() {

    const dispatch = useDispatch()
    const clickHandler = (thisSection) => {
        // console.log(thisSection)
        dispatch({ type: "SELECT_SECTION_PHOTOPLUS", payload: thisSection });
    };

    const { sectionSelectedPhotoplus } = useSelector((state) => state);


    return (
        <div className={styles.footer}>
            <div className={styles.sections}>
                <div className={styles.section}>
                    {/* <span style={{ fontSize: '2rem' }}>BlueWrench</span> */}
                    <div className={styles['logo-wrapper']}>
                        <div className={styles['logo-text']}>
                            <div className={styles['logo-name']}>  photo </div>
                            <div className={styles['logo-plus']}>  + </div>
                        </div>
                    </div>
                    {/* <span style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>plumbing</span> */}
                    <span style={{ width: '150px', fontSize: '0.9rem', marginTop: '1.5rem' }}>We can solve all your plumbing problems at a great price.</span>
                    <img src='/portfolio/plumbing-social.png' style={{ height: '2rem', marginTop: '1rem' }} />
                </div>
                <div className={styles.section}>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem', }}>Pages</span>
                    <Link href="/photoplus#home">
                        <span onClick={clickHandler.bind('home')} style={{ fontSize: '0.9rem', marginBottom: '1rem', cursor: 'pointer' }}>HOME</span>
                    </Link>
                    <Link href="/photoplus#about">
                        <span onClick={clickHandler.bind('about')} style={{ fontSize: '0.9rem', marginBottom: '1rem', cursor: 'pointer' }}>MY BEGININGS</span>
                    </Link>
                    <Link href="/photoplus#services">
                        <span onClick={clickHandler.bind('services')} style={{ fontSize: '0.9rem', marginBottom: '1rem', cursor: 'pointer' }}>ABOUT ME</span>
                    </Link>
                    <Link href="/photoplus#quote">
                        <span onClick={clickHandler.bind('quote')} style={{ fontSize: '0.9rem', marginBottom: '1rem', cursor: 'pointer' }}>MY PRICES</span>
                    </Link>

                </div>
                <div className={styles.section}>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem', }}>Contact Us</span>
                    <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>2/45 Tower Street, New York, USA</span>
                    <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>0012 678 8899</span>
                    <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>contact@doreydmehila.com</span>
                    <a href='/'><span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>www.doreydmehila.com</span></a>
                </div>
                <div className={styles.section}>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem', }}>Subscribe & Win a Coupon</span>
                    <input style={{ background: 'white', borderRadius: '5px', padding: '0.3rem 1rem', outline: 'none', border: '0px solid transparent' }} />
                    <div style={{ background: 'white', color: '#08134d', cursor: 'pointer', marginTop: '1rem', padding: '0.3rem 1rem', borderRadius: '5px', }} >Submit</div>
                </div>
            </div>
        </div>
    );
}



