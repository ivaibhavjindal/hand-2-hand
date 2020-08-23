import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashBoard from "./components/DashBoard";
import ContactUs from "./pages/ContactUs";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/users/dashboard" component={DashBoard} />
      <Route exact path="/users/signin" component={SignIn} />
      <Route exact path="/users/signup" component={SignUp} />
      <Route exact path="/contactus" component={ContactUs} />
    </Switch>
  );
}

export default Routes;
