

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import LoginPage from './Component/LoginPage';
import Dashboard from './Component/Dashboard'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Router> 
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </Router>
    </div>
  );
}

export default App;
