import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import NotFountPage from "../../NotFountPage/NotFoundPage";
import UserPageContainer from "../../UserPage/UserPageContainer";
import createStyles from "./styles";

const AppRouter: FunctionComponent = () => {
  const classes = createStyles();

  return (
    <Switch>
      <Route exact path="/user/:id" component={UserPageContainer} />
      <Route component={NotFountPage} />
    </Switch>
  );
};

export default AppRouter;
