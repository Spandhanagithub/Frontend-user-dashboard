
import React, { useState } from 'react';
import image1 from './image/image1.jpg';
import notificationBell from './image/notification-bell-13083.svg'; 
import styles from './Dashboard.module.css';
import Menu from './menu'; 

const Dashboard = ({ customerName, onLogout }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={styles['dashboard-container']}>
      <div className={styles['top-navbar']}>
        <div className={styles['logo']}>
          <img src={image1} alt="image1" className={styles['my-image']} />
        </div>
        <div className={styles['welcometo']}>
          <p>Welcome {customerName} to your Dashboard</p>
        </div>
        <div className={styles['bell-icon']}>
          <img src={notificationBell} alt="notification-bell" className={styles['notification-bell']} style={{ width: '30px' }} />
        </div>

        <div className={styles['actions']}>
          <button className={styles['logout']} onClick={onLogout}>Logout</button>
        </div>
      </div>
      <Menu selectedItem={selectedItem} handleItemClick={handleItemClick} />
    </div>
  );
};

export default Dashboard;
