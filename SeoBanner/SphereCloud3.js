
import React, { useEffect } from 'react';
import styles from './SphereCloud3.module.css';

const SphereCloud = () => {


    // $(document).ready(function () {

    //     var
    //         words = $('#tagi text'),
    //         l = words.length,
    //         current = null,
    //         delay = 2000;

    //     function clearBlink(o) {
    //         var
    //             ca = o.getAttribute('class').split(' '),
    //             i = ca.indexOf('blink');

    //         if (i !== -1) {
    //             ca.splice(i, 1);
    //             o.setAttribute('class', ca.join(' '));
    //         }
    //     }

    //     function addBlink(o) {
    //         var
    //             ca = o.getAttribute('class').split(' ');
    //         ca.push('blink');
    //         o.setAttribute('class', ca.join(' '));
    //     }

    //     function wordblink() {

    //         var e;

    //         if (current !== null) {
    //             clearBlink(words.eq(current)[0])
    //         }

    //         current = Math.floor(Math.random() * l);
    //         e = words.eq(current);
    //         addBlink(e[0]);

    //         setTimeout(wordblink, delay);
    //     }

    //     wordblink();

    // });

    return (
        <svg id="tagi" x="0px" y="0px" width="920px" height="324px" viewBox="0 0 920 324">
            <text transform="matrix(1 0 0 1 497.4292 293.7129)" className={`${styles["st17"]} ${styles["st0"]}`}>SALES</text>
            <text transform="matrix(1 0 0 1 727.8999 191.9316)" className={`${styles["st17"]} ${styles["st20"]}`}>CPC</text>
            <text id="XMLID_2_" transform="matrix(1 0 0 1 433.0854 82.7407)" className={`${styles["st17"]} ${styles["st8"]}`}>LEADS</text>
            <text transform="matrix(1 0 0 1 188.187 144.3555)" className={`${styles["st5"]} ${styles["st17"]}  ${styles["st22"]}`}>CLICKS</text>
            <text transform="matrix(1 0 0 1 380.8301 145.1353)" className={`${styles["st17"]} ${styles["st29"]}`}>ADWORDS</text>
            <text transform="matrix(1 0 0 1 378.8799 54.6626)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st6"]}`}>BING</text>
            <text transform="matrix(1 0 0 1 247.0718 191.1514)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st18"]}`}>YANDEX</text>
            <text transform="matrix(1 0 0 1 0 129.9268)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st30"]}`}>vKONTAKTE</text>
            <text transform="matrix(1 0 0 1 250.9712 76.1118)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st14"]}`}>REMARKETING</text>
            <text transform="matrix(1 0 0 1 229.9131 169.5225)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st25"]}`}>MARKETING</text>
            <text transform="matrix(1 0 0 1 472.4722 105.3691)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st27"]}`}>LOOKALIKE</text>
            <text transform="matrix(1 0 0 1 735.7007 163.4639)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st1"]}`}>BIG DATA</text>
            <text transform="matrix(1 0 0 1 128.9111 264.4697)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st26"]}`}>REKLAMA EFEKTYWNOŚCIOWA</text>
            <text transform="matrix(1 0 0 1 191.3057 102.2393)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st24"]}`}>PERFORMANCE</text>
            <text transform="matrix(1 0 0 1 318.4351 289.0342)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st1"]}`}>AUTOMATION</text>
            <text transform="matrix(1 0 0 1 740.77 211.4307)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st21"]}`}>ATTRIBUTION</text>
            <text transform="matrix(1 0 0 1 683.0542 230.5381)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st19"]}`}>BEHAVIORAL</text>
            <text transform="matrix(0.9244 0 0 1 632.7485 97.0288)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st16"]}`}>E-COMMERCE</text>
            <text transform="matrix(1 0 0 1 663.5552 139.2856)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st3"]}`}>KONWERSJE</text>
            <text transform="matrix(1 0 0 1 251.3608 240.4502)" className={`${styles["st17"]} ${styles["st20"]}`}>SHOPPING CAMPAIGNS</text>
            <text transform="matrix(1 0 0 1 217.0439 54.2744)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st11"]}`}>PRODUCT FEED</text>
            <text transform="matrix(1 0 0 1 119.9526 240.2871)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st13"]}`}>TRACKING</text>
            <text transform="matrix(1 0 0 1 444.0044 34.7744)" className={`${styles["st5"]} ${styles["st17"]} ${styles["st4"]}`}>KEYWORDS</text>
            <text transform="matrix(1 0 0 1 125.4019 129.147)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st15"]}`}>CTR</text>
            <text transform="matrix(1 0 0 1 350.8022 207.5303)" className={`${styles["st17"]} ${styles["st2"]}`}>REVENUE</text>
            <text transform="matrix(1 0 0 1 81.5249 212.6006)" className={`${styles["st17"]} ${styles["st9"]}`}>ROI</text>
            <text transform="matrix(1 0 0 1 545.0063 316.7061)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st23"]}`}>COSTS</text>
            <text transform="matrix(1 0 0 1 638.2075 66.7529)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st12"]}`}>AD GROUPS</text>
            <text transform="matrix(1 0 0 1 185.8467 282.4043)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st10"]}`}>OPTIMIZATION</text>
            <text transform="matrix(1 0 0 1 34.1494 150.5947)" className={`${styles["st5"]} ${styles["st28"]} ${styles["st7"]}`}>TARGETING</text>
        </svg >

    );
};

export default SphereCloud;

