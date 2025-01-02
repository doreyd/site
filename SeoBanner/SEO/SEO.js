

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
const centerX = 350;
const centerY = 350;
const radius = 350;
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

            left: 125 + (Math.floor(point.x) - dotDiameter) / 2,
            top: 125 + (Math.floor(point.y) - dotDiameter) / 2,
        }
    })

    console.log(newPoints)

    return (
        <div className={styles['wrapper-big']}>
            <div className={styles['inside-wrapper']}>
                <div className={styles['seo-wrapper']}>
                    <div className={`${styles['seo']} ${styles['exo-500']} `}>SEO</div>
                    <div className={styles['seo-text']}>SEARCH ENGINE OPTIMIZATION</div>
                </div>
                {
                    newPoints.map((point, i) => {
                        return <div className={styles.dot} style={{
                            background: `radial-gradient(circle at 10px 10px, ${dotColors[i]}, ${darker[i]})`,
                            left: point.left + 'px',
                            top: point.top + 'px',
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