import React from 'react';
import { Link } from "react-router-dom";

export default ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <div>
      <p>Welcome, {currentUser.username}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <nav className="login-signup">
      <button onClick={() => openModal('Login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('Signup')}>Signup</button>
    </nav>
  );
  
  return (
    <div>
      {display}
    </div>
  );
};
