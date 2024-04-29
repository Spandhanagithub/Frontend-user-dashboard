import React, { useState, useEffect } from 'react';
import styles from './Subscription.module.css'; 
const SubscriptionDetails = () => {
  const [customerID, setCustomerID] = useState('');
  const [planActivated, setPlanActivated] = useState('');
  const [expiresOn, setExpiresOn] = useState('');
  const [subscriptionCost, setSubscriptionCost] = useState('');

  const fetchSubscriptionFromDatabase = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          customerID: 'xxxxxx',
          planActivated: 'xx/xx/xxxx',
          expiresOn: 'xx/xx/xxxx',
          subscriptionCost: 'xxx'
        });
      }, 1000);
    });
  };

  const fetchSubscriptionDetails = async () => {
    try {
      const subscriptionData = await fetchSubscriptionFromDatabase();
      setCustomerID(subscriptionData.customerID);
      setPlanActivated(subscriptionData.planActivated);
      setExpiresOn(subscriptionData.expiresOn);
      setSubscriptionCost(subscriptionData.subscriptionCost);
    } catch (error) {
      console.error('Error fetching subscription details:', error);
    }
  };

  useEffect(() => {
    fetchSubscriptionDetails();
  }, []);

  return (
    <div className={styles.subscriptioncontainer}>
      <div className={styles.subscriptionDetails}>
        <h1>Subscription Details</h1>
        <div>
          <p>Customer ID: {customerID}</p>
          <p>Plan Activated: {planActivated}</p>
          <p>Expires On: {expiresOn}</p>
          <p>Subscription Cost: SGD {subscriptionCost}</p>
        </div>
        <div>
          <button className={styles.Renew} onClick={() => console.log('Renew Now clicked')}>Renew Now</button>
          <button className={styles.Manage} onClick={() => console.log('Manage Plan clicked')}>Manage Plan</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
