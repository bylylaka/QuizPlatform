import React, { FunctionComponent, useEffect } from "react";
import {
  IStartNavigationPageProps,
  IStartNavigationPageCallProps,
} from "./props";
import LoginRouter from "../routes/LoginRouter";
import AppLayoutContainer from "../shared/AppLayout/AppLayoutContainer";
import { Router, BrowserRouter } from "react-router-dom";
import customHistory from "../routes/CustomHistory";

export const StartNavigationPage: FunctionComponent<
  IStartNavigationPageProps & IStartNavigationPageCallProps
> = (props) => {
  const { checkAuthorized, isAuthorized } = props;

  useEffect(() => {
    checkAuthorized();
  }, []);

  if (isAuthorized === undefined) {
    return <p>Loading...</p>;
  }
  if (isAuthorized) {
    return (
      <Router history={customHistory}>
        <AppLayoutContainer />
      </Router>
    );
  } else {
    return (
      <BrowserRouter>
        <LoginRouter />
      </BrowserRouter>
    );
  }
};

export default StartNavigationPage;
