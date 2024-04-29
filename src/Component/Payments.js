import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';
import styles from './Payment.module.css'; 

const Payment = () => {
  const [subscriptionCost, setSubscriptionCost] = useState(null);
  const [expirationDate, setExpirationDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const subscriptionData = {
        cost: 99.99,
        expiration: '01/01/2025',
      };
      setSubscriptionCost(subscriptionData.cost);
      setExpirationDate(subscriptionData.expiration);
    };
    fetchData();
  }, []);

  const handleDownloadInvoice = () => {
    const dummyInvoice = `Invoice
    Subscription Cost: SGD$ ${subscriptionCost}
    Expires On: ${expirationDate}`;
    const blob = new Blob([dummyInvoice], { type: 'application/pdf' });
    saveAs(blob, 'invoice.pdf');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Billing Details</h2>
        {subscriptionCost !== null && expirationDate !== null ? (
          <>
            <div className={styles.card}>
              <p>Subscription Cost: SGD$ {subscriptionCost}</p>
            </div>
            <div className={styles.card}>
              <p>Expires On: {expirationDate}</p>
            </div>
            <button onClick={handleDownloadInvoice} className={styles.pdfinvoice}>Download Invoice PDF</button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Payment;
