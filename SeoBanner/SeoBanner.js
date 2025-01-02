// import React, { useState, useEffect } from 'react';
// import styles from './SeoBanner.module.css';

// const keywords = [
//   'SEO Optimization',
//   'Digital Marketing',
//   'Social Media Management',
//   'Website Development',
//   'Content Strategy',
//   'Online Advertising',
//   'PPC Campaigns',
//   'Email Marketing',
//   'Brand Awareness',
//   'Lead Generation',
//   'Web Design',
//   'Mobile Optimization',
//   'E-commerce Solutions',
//   'Google Ads Management',
//   'Analytics & Insights'
// ];

// const Banner = () => {
//   const [currentKeyword, setCurrentKeyword] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentKeyword((prevKeyword) => (prevKeyword + 1) % keywords.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={styles.banner}>
//       <div className={styles.bannerContent}>
//         <h1 className={styles.bannerTitle}>Boost Your Online Presence</h1>
//         <p className={styles.bannerKeyword}>{keywords[currentKeyword]}</p>
//         <p className={styles.bannerSubtitle}>Let me create the perfect website and marketing strategy for you!</p>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from 'react';
import styles from './SeoBanner.module.css';

const words = [
  // 'Innovation', 'Success', 'Growth', 'Strategy', 'Leadership',
  // 'Technology', 'Creativity', 'Vision', 'Focus', 'Motivation',
  // 'Development', 'Inspiration', 'Excellence', 'Impact', 'Knowledge'
  'SEO Optimization',
  'Digital Marketing',
  'Social Media Management',
  'Website Development',
  'Mobile Optimization',
  'Ecommerce Solutions',
  'Google Ads',
];

const WordCloud = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['inside-wrapper']}>
        {words.map((word, index) => (
          <span key={index} className={styles.word} >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordCloud;