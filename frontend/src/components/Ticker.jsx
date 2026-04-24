import React from 'react';
import styles from './Ticker.module.css';

const Ticker = () => {
  return (
    <div className={styles.tickerWrap}>
      <div className={styles.ticker}>
        <div className={styles.tickerItem}>
          Create
        </div>
        <div className={styles.tickerItem}>
          Read
        </div>
        <div className={styles.tickerItem}>
          Update
        </div>
        <div className={styles.tickerItem}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default Ticker;
