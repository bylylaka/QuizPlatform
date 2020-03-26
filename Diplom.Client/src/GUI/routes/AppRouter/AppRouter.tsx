import React, { FunctionComponent } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NotFountPage from "../../NotFountPage/NotFoundPage";
import ProfilePageContainer from "../../ProfilePage/ProfilePageContainer";
import Grid from "@material-ui/core/Grid";
import NavigationPanel from "../../shared/NavigationPanel/NavigationPanel";

const AppRouter: FunctionComponent = () => {
  return (
    <Grid container justify="center">
      <NavigationPanel />
      <Router>
        <Switch>
          <Route exact path="/profile" component={ProfilePageContainer} />
          <Route component={NotFountPage} />
        </Switch>
      </Router>
    </Grid>
  );
};

export default AppRouter;
