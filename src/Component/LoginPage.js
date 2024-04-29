import React, { useState } from 'react';
import image1 from './image/image1.jpg';
import styles from './LoginPage.module.css'; 

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false); 

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    onLogin();
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }

    // Check if both email and password are not empty
    setIsFormValid(email.trim() !== '' && password.trim() !== '');
  };

  return (
    <div className={styles.end}> 
      <div className={styles['login-container']}>
        <div>
          <img src={image1} alt="image1" className={styles.myImage} /> 
          <div className={styles['login-form']}> 
            <h2 className={styles.user}>User Login</h2> 
            <div className={styles['form-group']}> 
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles['form-group']}> 
              <label>Password*</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles['form-group1']}> {/* Use styles['form-group1'] */}
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className={styles.remember}>Remember Me</label> 
            </div>
            <div className={styles['form-actions']}> 
              <button onClick={handleLogin} disabled={!isFormValid}>Login</button>
            </div>
            <div className={styles['form-actions1']}>
              <span className={styles['register-link']}>Registration</span> 
              <span className={styles['forget-password']}>Forget Password?</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
