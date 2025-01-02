

import React from 'react';
import styles from './SEO.module.css';



function generateCirclePoints(x, y, r, n) {


    const points = [];
    const angleStep = (2 * Math.PI) / n; // Calculate the angle step in radians

    for (let i = 0; i < n; i++) {
        const angle = i * angleStep; // Current angle
        const pointX = x + r * Math.cos(angle); // Calculate x-coordinate
        const pointY = y + r * Math.sin(angle); // Calculate y-coordinate

        points.push({ x: Math.floor(pointX), y: Math.floor(pointY) });
    }

    return points;
}

// Example usage:
const centerX = 50;
const centerY = 50;
const radius = 200;
const numPoints = 11;


const dotDiameter = 120

const dotColors = [
    'hsl(193, 100%, 43%)',
    'hsl(17, 87%, 53%)',
    'hsl(148, 98%, 32%)',
    'hsl(332, 68%, 43%)',
    'hsl(17, 87%, 53%)',
    'hsl(193, 100%, 43%)',
    'hsl(42, 98%, 53%)',
    'hsl(148, 98%, 32%)',
    'hsl(332, 68%, 43%)',
    'hsl(17, 87%, 53%)',
    'hsl(148, 98%, 32%)'
]

const darker = [
    'hsl(193, 100%, 23%)',
    'hsl(17, 87%, 33%)',
    'hsl(148, 98%, 12%)',
    'hsl(332, 68%, 23%)',
    'hsl(17, 87%, 33%)',
    'hsl(193, 100%, 23%)',
    'hsl(42, 98%, 33%)',
    'hsl(148, 98%, 12%)',
    'hsl(332, 68%, 23%)',
    'hsl(17, 87%, 33%)',
    'hsl(148, 98%, 12%)'
]

const WordCloud = () => {
    const points = generateCirclePoints(centerX, centerY, radius, numPoints);

    const words = [
        'Ecommerce Solutions',
        'Digital Marketing',
        'Social Media Management',
        'Google Ads Management',
        'Online Advertising',
        'PPC Campaigns',
        'Brand Awareness',
        'Analytics & Insights',
        'Web Design',
        'Website Development',
        'Mobile Optimization',
    ];

    const newPoints = points.map(point => {
        return {

            left: (Math.floor(point.x) - dotDiameter) / 2,
            top: (Math.floor(point.y) - dotDiameter) / 2,
        }
    })

    console.log(newPoints)

    return (
        <div className={styles['wrapper-small']}>
            <div className={styles['inside-wrapper']}>
                <div className={styles['seo-wrapper']}>
                    <div className={`${styles['seo']} ${styles['exo-500']} `}>SEO</div>
                    <div className={styles['seo-text']}>SEARCH ENGINE OPTIMIZATION</div>
                </div>
                {
                    newPoints.map((point, i) => {
                        return <div className={styles.dot} style={{
                            background: `radial-gradient(circle at 10px 10px, ${dotColors[i]}, ${darker[i]})`,
                            left: `calc(50% ${point.left >= 0 ? '+' : '-'} ${Math.abs(point.left)}px)`,
                            top: `calc(50% ${point.top >= 0 ? '+' : '-'} ${Math.abs(point.top)}px)`,
                            top: `calc(50% + ${point.top}px)`,
                            animation: `${styles.scaleUpDown} 2s infinite ${Math.floor(i * 10 / 5) / 10}s`,
                        }}>
                            {words[i]}
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default WordCloud;