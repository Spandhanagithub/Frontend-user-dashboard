import React from 'react';
import styles from './Report.module.css';

const Report = () => {
    return (
        <div className={styles['report-container']}>
            <table className={styles['report-table']}>
                <thead>
                    <tr>
                        <th className={styles['service-type']}>Type of Services</th>
                        <th className={styles['allotted']}>Allotted In Plan</th>
                        <th className={styles['used']}>Used</th>
                        <th className={styles['balance']}>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles['service-name']}>Electrical & Electronics Maintenance</td>
                        <td className={styles['allotted']}>18</td>
                        <td className={styles['used']}>6</td>
                        <td className={styles['balance']}>12</td>
                    </tr>
                    <tr>
                        <td className={styles['service-name']}>Plumbing Maintenance</td>
                        <td className={styles['allotted']}>10</td>
                        <td className={styles['used']}>2</td>
                        <td className={styles['balance']}>8</td>
                    </tr>
                    <tr>
                        <td className={styles['service-name']}>Computer System Maintenance (Hardware & Software)</td>
                        <td className={styles['allotted']}>8</td>
                        <td className={styles['used']}>3</td>
                        <td className={styles['balance']}>5</td>
                    </tr>
                    <tr>
                        <td className={styles['service-name']}>Carpenter Services</td>
                        <td className={styles['allotted']}>6</td>
                        <td className={styles['used']}>2</td>
                        <td className={styles['balance']}>4</td>
                    </tr>
                    <tr>
                        <td className={styles['service-name']}>Cleaning Solutions</td>
                        <td className={styles['allotted']}>4</td>
                        <td className={styles['used']}>2</td>
                        <td className={styles['balance']}>2</td>
                    </tr>
                    <tr>
                        <td className={styles['service-name']}>F.M.O Review</td>
                        <td className={styles['allotted']}>2</td>
                        <td className={styles['used']}></td>
                        <td className={styles['balance']}>2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Report;
