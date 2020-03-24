import React, { FunctionComponent } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NotFountPage from "../NotFountPage/NotFoundPage";
import ProfilePageContainer from "../ProfilePage/ProfilePageContainer";

const AppRouter: FunctionComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/profile" component={ProfilePageContainer} />
          <Route component={NotFountPage} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
