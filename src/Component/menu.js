import React, { useState } from 'react';
import Home from './Home'; // Import your page components
import AccountDetails from './AccountDetails';
import Payments from './Payments';
import Subscription from './SubscriptionDetails';
import Service from './Service';
import ServiceReport from './Report';
import ScheduleService from './Schedule';
import Support from './Support';
import FAQ from './Faq';
import styles from './menu.module.css'; 

function App() {
  
  const [currentPage, setCurrentPage] = useState(null);


  const openPage = (pageName) => {
    setCurrentPage(pageName);
  };

 
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'AccountDetails':
        return <AccountDetails />;
      case 'Payments':
        return <Payments />;
      case 'Subscription':
        return <Subscription />;
      case 'Service':
        return <Service />;
      case 'Report':
        return <ServiceReport />;
      case 'Schedule':
        return <ScheduleService />;
      case 'Support':
        return <Support />;
      case 'Faq':
        return <FAQ />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.app}>
     
      <div className={styles.sidebar}>
       
        <div className={styles['user-image']}>
          <img src="path_to_user_image_from_database" alt="User Image" />
        </div>
      
        <a href="#" onClick={() => openPage('Home')}>Home</a>
        <a href="#" onClick={() => openPage('AccountDetails')}>Account Details</a>
        <a href="#" onClick={() => openPage('Payments')}>Payments</a>
        <a href="#" onClick={() => openPage('Subscription')}>Subscription Details</a>
        <a href="#" onClick={() => openPage('Service')}>Service History</a>
        <a href="#" onClick={() => openPage('Report')}>Service Report</a>
        <a href="#" onClick={() => openPage('Schedule')}>Schedule Your Service</a>
        <a href="#" onClick={() => openPage('Support')}>Support</a>
        <a href="#" onClick={() => openPage('Faq')}>FAQ</a>
      </div>

   
      <div className={styles.content}>
      
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
