import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.sections}>
                <div className={styles.section}>
                    <span style={{ fontSize: '2rem' }}>BlueWrench</span>
                    {/* <span style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>plumbing</span> */}
                    <span style={{ width: '150px', fontSize: '0.9rem', marginTop: '1.5rem' }}>We can solve all your plumbing problems at a great price.</span>
                    <img src='/portfolio/plumbing-social.png' style={{ height: '2rem', marginTop: '1rem' }} />
                </div>
                <div className={styles.section}>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem', }}>Pages</span>
                    <a href='/plumbing'> <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>Home</span></a>
                    <a href='/plumbing/about'> <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>About</span></a>
                    <a href='/plumbing/services'>  <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>Services</span></a>
                    <a href='/plumbing/quote'> <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>Get A Quote</span></a>
                </div>
                <div className={styles.section}>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem', }}>Contact Us</span>
                    <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>2/45 Tower Street, New York, USA</span>
                    <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>0012 678 8899</span>
                    <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>contact@doreydmehila.com</span>
                    <span style={{ fontSize: '0.9rem', marginBottom: '1rem', }}>www.doreydmehila.com</span>
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



