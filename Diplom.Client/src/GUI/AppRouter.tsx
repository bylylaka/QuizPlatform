import React, { FunctionComponent } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginPageContainer from "./LoginPage/LoginPageContainer";

const AppRouter: FunctionComponent = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/:buildingId?/:roomId?"
            component={LoginPageContainer}
          />
          {/*<Route component={NotFountPage} /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
