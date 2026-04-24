import React from 'react';
import styles from './HeroHeader.module.css';

const HeroHeader = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>CRUD Application</h1>

      </div>

      {/* Large SVG wave divider at the bottom */}
      <div className={styles.waveContainer}>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className={styles.wave}>
          <path
            fill="var(--color-bg)"
            fillOpacity="1"
            d="M0,224L60,202.7C120,181,240,139,360,144C480,149,600,203,720,202.7C840,203,960,149,1080,128C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default HeroHeader;
