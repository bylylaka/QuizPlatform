import React, { FunctionComponent, useEffect } from "react";
import {
  IStartNavigationPageProps,
  IStartNavigationPageCallProps
} from "./props";
import LoginRouter from "../routes/LoginRouter";
import AppLayoutContainer from "../shared/AppLayout/AppLayoutContainer";

export const StartNavigationPage: FunctionComponent<IStartNavigationPageProps &
  IStartNavigationPageCallProps> = props => {
  const { checkAuthorized, isAuthorized } = props;

  useEffect(() => {
    checkAuthorized();
  }, []);

  if (isAuthorized === undefined) {
    return <p>Loading...</p>;
  }
  if (isAuthorized) {
    return <AppLayoutContainer />;
  } else {
    return <LoginRouter />;
  }
};

export default StartNavigationPage;
