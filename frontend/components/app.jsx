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
import DiscoverContainer from "./discover/discover_container";
import Modal from "./modal/modal";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <>
    <Modal />
    <Switch>
      <Route exact path="/discover" component={DiscoverContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
