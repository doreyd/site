import React from "react";
import styles from "./Services.module.css";

export default function Services() {
    return (
        <div className={styles.services}>
            <div className={styles['inside-wrapper']}>
                <img src='/portfolio/plumbing-tl.png' className={styles.tl} />
                <img src='/portfolio/plumbing-tr.png' className={styles.tr} />
                <img src='/portfolio/plumbing-br.png' className={styles.br} />


            </div>
        </div>
    );
}
