import React, { FunctionComponent } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import LoginPageContainer from "../LoginPage/LoginPageContainer";
import RegistrationPageConainer from "../RegistrationPage/RegistrationPageContainer";

const LoginRouter: FunctionComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPageContainer} />
          <Route exact path="/register" component={RegistrationPageConainer} />
          <Redirect to="/register" />
        </Switch>
      </Router>
    </>
  );
};

export default LoginRouter;
