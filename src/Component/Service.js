

import React from 'react';
import styles from './Service.module.css';

const Service = () => {
    return (
        <div className={styles.service}>
            <label htmlFor="serviceType">Service Type:</label>
            <select className={styles.serviceTypeselect}>
                <option value="select">select</option>
                <option value="electrical">Electrical & Electronics Maintenance</option>
                <option value="plumbing">Plumbing Maintenance</option>
                <option value="computer">Computer System Maintenance (Hardware & Software)</option>
                <option value="carpenter">Carpenter Services</option>
                <option value="cleaning">Cleaning Solutions</option>
            </select>

            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td>Date</td>
                        <td>12/02/2021</td>
                    </tr>
                    <tr>
                        <td>Time:</td>
                        <td>04:30 pm</td>
                    </tr>
                    <tr>
                        <td>Maintenance Engineer:</td>
                        <td>Avinash Sharma</td>
                    </tr>
                    <tr>
                        <td>Problem Fixed:</td>
                        <td>Repaired Lamp and fixed wire of kitchen switch board</td>
                    </tr>
                    <tr>
                        <td>Service ID:</td>
                        <td>XXXXXX (Six Digit)</td>
                    </tr>
                    <tr>
                        <td>Give Us Rating:</td>
                        <td className={styles.rating}>★★★★☆</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Service;
