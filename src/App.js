import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Portfolio from './components/Portfolio';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('portfolio_logged_in');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    sessionStorage.setItem('portfolio_logged_in', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('portfolio_logged_in');
    sessionStorage.removeItem('portfolio_user');
  };

  if (loading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-black">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Portfolio onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
