import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.sections}>
                <div className={styles.section}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        height="60px"
                        viewBox="0 -960 960 960"
                        className={styles.bag}
                        width="60px"
                        fill="#000000">
                        <path d="M220-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480-880q63 0 106.5 43.5T630-730v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520v-520H630v90q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-90H390v90q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10ZM220-140v-520 520Z" />
                    </svg>
                    <span style={{ fontSize: '2rem' }}>Shop Now</span>
                    {/* <span style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>plumbing</span> */}
                    <span style={{ width: '150px', fontSize: '0.9rem', marginTop: '1.5rem' }}>Best offers. <br /> Best deals. </span>
                    {/* <img src='/portfolio/plumbing-social.png' style={{ height: '2rem', marginTop: '1rem' }} /> */}
                </div>
                <div className={styles.section}>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem', }}>Pages</span>
                    <a href='/plumbing'> <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>Home</span></a>
                    <a href='/plumbing/about'> <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>Deals</span></a>
                    <a href='/plumbing/services'>  <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>Contact</span></a>
                    <a href='/plumbing/quote'> <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>Cart</span></a>
                </div>
                <div className={styles.section}>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem', }}>Contact Us</span>
                    <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>2/45 Tower Street, New York, USA</span>
                    <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>0012 678 8899</span>
                    <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>contact@doreydmehila.com</span>
                    <a href='/'> <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>www.doreydmehila.com</span></a>
                </div>
                <div className={styles.section}>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem', }}>Subscribe & Win a Coupon</span>
                    <input style={{ background: 'white', borderRadius: '5px', padding: '0.3rem 1rem', outline: 'none', border: '0px solid transparent' }} />
                    <div style={{ background: 'white', color: '#08134d', cursor: 'pointer', marginTop: '1rem', padding: '0.3rem 1rem', borderRadius: '5px', }} >Submit</div>
                </div>
            </div>
        </div >
    );
}



