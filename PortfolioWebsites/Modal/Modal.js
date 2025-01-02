'use client'


import React, { useState } from 'react';
import styles from './Modal.module.css';
import { useSelector } from 'react-redux';

const ImageSliderModal = ({ modalOn, setModalOn }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { siteSelected, portfolio } = useSelector(state => state)


    // const portfolio = {
    //     shop: [
    //         `/portfolio/shop1.png`,
    //         `/portfolio/shop2.png`,
    //         `/portfolio/shop3.png`
    //     ],
    //     photo: [
    //         `/portfolio/photo1.png`,
    //         `/portfolio/photo2.png`,
    //         `/portfolio/photo3.png`,
    //         `/portfolio/photo4.png`,
    //         `/portfolio/photo5.png`,
    //     ]
    // }


    const closeModal = () => setModalOn(false);


    return (
        <div className={styles.wrapper} >
            <svg xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                className={styles.close}
                onClick={closeModal}
                fill="#000000">
                <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <div className={styles['modal-content']} >
                {portfolio[siteSelected].map((imgSrc, index) => {
                    return index === currentIndex && <img src={imgSrc} className={styles.img} />
                })}
                <div className={styles.dots} onClic={(e) => e.stopPropagation()} >
                    {portfolio[siteSelected].map((imgSrc, index) => {
                        return <div className={index !== currentIndex ? styles.dot : styles['dot-active']} onClick={() => setCurrentIndex(index)} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default ImageSliderModal;



