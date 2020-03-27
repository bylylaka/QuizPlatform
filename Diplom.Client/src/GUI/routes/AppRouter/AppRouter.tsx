import React, { FunctionComponent } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NotFountPage from "../../NotFountPage/NotFoundPage";
import ProfilePageContainer from "../../ProfilePage/ProfilePageContainer";
import createStyles from "./styles";

const AppRouter: FunctionComponent = () => {
  const classes = createStyles();

  return (
    <Router>
      <Switch>
        <Route exact path="/profile" component={ProfilePageContainer} />
        <Route component={NotFountPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
