import React from "react";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SplashContainer from "./splash/splash_container";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Modal from "./modal/modal";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <>
    <Modal />
    {/* <SplashContainer /> */}
    <Switch>
      <Route exact path="/" component={SplashContainer}/>
      <Redirect to="/" />
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </Switch>
  </>
);

export default App;
