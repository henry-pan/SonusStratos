import React from 'react';
import { Route } from "react-router-dom";
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Welcome, {currentUser.username}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
    </div>
  );
  
  return (
    <div>
      {display}
    </div>
  );
};
