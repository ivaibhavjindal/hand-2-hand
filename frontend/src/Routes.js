import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import DashBoard from "./components/DashBoard";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/users/dashboard" render={() => <DashBoard />} />
      <Route exact path="/users/signin" component={SignIn} />
      <Route exact path="/users/signup" component={SignUp} />
    </Switch>
  );
}

export default Routes;
