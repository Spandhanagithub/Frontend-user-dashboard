

import React, { useState } from 'react';
import styles from './Account.module.css'; 
import UserIcon from './image/user-4254.svg'; 

const Account = () => {
  const [email, setEmail] = useState('user@example.com');
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [premisesType, setPremisesType] = useState('Apartment');
  const [contact, setContact] = useState('123-456-7890');
  const [address, setAddress] = useState('123 Street, City, Country');
  const [profilePicture, setProfilePicture] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.files[0]);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleUserIconClick = () => {
    document.getElementById('profile-picture-upload').click();
  };

  const handleUpdatePassword = () => {
    
  };

  return (
    <div className={styles['user-profile']}>
      <div className={styles['profile-field']}>
        <div className={styles['upload-container']}>
          {profilePicture ? (
            <img src={URL.createObjectURL(profilePicture)} alt="Profile Picture" className={styles['user-icon']} onClick={handleUserIconClick} />
          ) : (
            <label htmlFor="profile-picture-upload" className={styles['upload-icon']} onClick={handleUserIconClick}>
              <img src={UserIcon} alt="User Icon" className={styles['user-icon']} />
            </label>
          )}
          <svg className={styles['edit-icon']} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={handleEditClick}>
            <path d="M3 17v4h4l11-11-4-4L3 17zM22.71 5.3a1 1 0 0 0 0-1.42l-2.83-2.83a1 1 0 0 0-1.42 0L14 6.56 17.44 10l5.3-5.3a1 1 0 0 0 0-1.42z"/>
          </svg>
          <label htmlFor="profile-picture-upload" className={styles['upload-profile-label']}></label>
        </div>
        {isEditing && (
          <input type="file" id="profile-picture-upload" onChange={handleProfilePictureChange} style={{ display: 'none' }} />
        )}
      </div>

      <div className={styles['profile-details']}>
        <div className={styles['profile-field']}>
          <label htmlFor="email">Email ID</label>
          <input type="email" id="email" value={email} readOnly />
        </div>
        <div className={styles['profile-field']}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={styles['profile-field']}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={styles['profile-field']}>
          <label htmlFor="premises-type">Premises Type</label>
          <input
            type="text"
            id="premises-type"
            value={premisesType}
            onChange={(e) => setPremisesType(e.target.value)}
          />
        </div>
        <div className={styles['profile-field']}>
          <label htmlFor="contact">Contact</label>
          <input
            type="tel"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className={styles['profile-field']}>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
    
     {/* Change Password Section */}
     <div className={styles['change-password']}>
       <div className={styles['profile-field']}>
         <label htmlFor="current-password">Current Password</label>
         <input
           type="password"
           id="current-password"
           value={currentPassword}
           onChange={(e) => setCurrentPassword(e.target.value)}
         />
       </div>
       <div className={styles['profile-field']}>
         <label htmlFor="new-password">New Password</label>
         <input
           type="password"
           id="new-password"
           value={newPassword}
           onChange={(e) => setNewPassword(e.target.value)}
         />
       </div>
       <div className={styles['profile-field']}>
         <label htmlFor="confirm-password">Confirm Password</label>
         <input
           type="password"
           id="confirm-password"
           value={confirmPassword}
           onChange={(e) => setConfirmPassword(e.target.value)}
         />
       </div>
       <button className={styles['update-button']} onClick={handleUpdatePassword}>Update</button>
     </div>
   </div>
 );
};

export default Account;
