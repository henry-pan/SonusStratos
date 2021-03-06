import React from "react";
import { Route, Redirect, Switch } from 'react-router-dom';

import SplashContainer from "./splash/splash_container";
import DiscoverContainer from "./discover/discover_container";
import StreamContainer from "./stream/stream_container";
import UploadContainer from "./upload/upload_container";
import TrackPageContainer from "./track_page/track_page_container";
import UserPageContainer from "./user_page/user_page_container";
import PlayBarContainer from "./playbar/playbar_container";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <>
    <PlayBarContainer />
    <Switch>
      <Route exact path="/discover" component={DiscoverContainer} />
      <Route exact path="/stream" component={StreamContainer} />
      <Route exact path="/upload" component={UploadContainer} />
      <Route exact path="/tracks/:trackId" component={TrackPageContainer} />
      <Route exact path="/users/:userId" component={UserPageContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
