import React, { FunctionComponent } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginPageContainer from "../LoginPage/LoginPageContainer";
import RegistrationPageConainer from "../RegistrationPage/RegistrationPageContainer";
import NotFountPage from "../NotFountPage/NotFoundPage";

const LoginRouter: FunctionComponent = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPageContainer} />
          {/* <Route exact path="/register" component={RegistrationPageConainer} /> */}
          <Route component={NotFountPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default LoginRouter;
