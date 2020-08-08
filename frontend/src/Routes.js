import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";

function Routes() {
  return (
    <Switch>
      <Route exact path="/users/signin" component={SignIn} />
    </Switch>
  );
}

export default Routes;
