// import React, { useState } from 'react';
import styles from './Modal.module.css';

const ImageSliderModal = ({ images, isOpen, onClose }) => {
    // const [currentIndex, setCurrentIndex] = useState(0);

    // if (!isOpen) return null;

    // const handleDotClick = (index) => {
    //     setCurrentIndex(index);
    // };

    // const handleNext = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // };

    // const handlePrev = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    // };

    return (
        <div className={styles.wrapper} >
            <div className={styles['modal-content']} >
                sdfsdsdf
            </div>
        </div>
    );
};

export default ImageSliderModal;
