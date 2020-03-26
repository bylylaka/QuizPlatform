import React, { FunctionComponent, useEffect } from "react";
import {
  IStartNavigationPageProps,
  IStartNavigationPageCallProps
} from "./props";
import AppRouter from "../routes/AppRouter/AppRouter";
import LoginRouter from "../routes/LoginRouter";

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
    return <AppRouter />;
  } else {
    return <LoginRouter />;
  }
};

export default StartNavigationPage;
