

import React, { useState } from 'react';
import styles from './Support.module.css'; 

function Support() {
    const [subject, setSubject] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
    };

    const handleCancel = () => {
      
        setSubject('');
        setType('');
        setDescription('');
        setFile(null);
    };

    return (
        <div className={styles.supportContainer}>
            <h1>Support</h1>
            <p>If you have any questions related to your subscription and account, raise a ticket.</p>
            <p>Email us at: <a href="mailto:service@fixtechcare.com">service@fixtechcare.com</a></p>
            <p>Service Center: xxxxxxxxxx</p>
            <form onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="subject">Subject*</label><br />
               
                <input type="text" id="subject" className={styles.inputField} value={subject} onChange={handleSubjectChange} required /><br />

                <label className={styles.label} htmlFor="type">Type*</label><br />
                <select id="type" value={type} onChange={handleTypeChange} required>
                    <option value="">Select...</option>
                    <option value="Account">Account</option>
                    <option value="Payment">Payment</option>
                    <option value="Other">Other</option>
                    <option value="Add on Service">Add on Service</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Question">Question</option>
                </select><br />
                <label className={styles.label} htmlFor="description">Description*</label><br />
                <textarea id="description" className={`${styles.textareaField} ${styles.descriptionTextarea}`} value={description} onChange={handleDescriptionChange} required /><br />

                <label className={styles.label} htmlFor="file">Attach a file</label><br />
                <input type="file" id="file" onChange={handleFileChange} /><br />
                <div className={styles.buttonsContainer}>
                    <button type="submit" className={styles.submitButton}>Submit</button>
                    <button type="button" onClick={handleCancel} className={styles.cancelButton}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Support;
