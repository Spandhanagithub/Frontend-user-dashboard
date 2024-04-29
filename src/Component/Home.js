

import React from 'react';
import styles from './Home.module.css'; 

function Home() {
  return (
    <div className={styles.home}>
      <p className={styles.welcome}><h2>Welcome to "FixTech Care" - your one & only reliable maintenance partner</h2></p>
      <button className={styles.book} style={{ animation: `${styles.moveBackAndForth} 2s infinite` }}>Raise your service ticket now</button>
    </div>
  );
}

export default Home;
