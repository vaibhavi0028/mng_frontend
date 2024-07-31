import React from 'react';
import styles from '@/styles/ThirdComponent.module.css';

const ThirdComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        BUILD TRUST WITH YOUR USERS WITH A <span className={styles.highlight}>BEAUTIFUL LANDING PAGE</span>
      </h2>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <p className={styles.statNumber}>45%</p>
          <p className={styles.statDescription}>Lorem ipsum dolor sit amet consectet</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.statItem}>
          <p className={styles.statNumber}>15.5K+</p>
          <p className={styles.statDescription}>Lorem ipsum dolor sit amet consectet</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.statItem}>
          <p className={styles.statNumber}>20B+</p>
          <p className={styles.statDescription}>Lorem ipsum dolor sit amet consectet</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdComponent;