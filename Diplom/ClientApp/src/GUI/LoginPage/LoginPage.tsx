import React, { FunctionComponent } from "react";
import { ILoginPageProps, ILoginPageCallProps } from "./props";
import createStyles from "./styles";
import LoginForm from "./LoginForm/LoginForm";
import Grid from "@material-ui/core/Grid";

export const LoginPage: FunctionComponent<ILoginPageProps &
  ILoginPageCallProps> = props => {
  const { login } = props;

  const classes = createStyles();

  const handleSubmit = (values: any) => {
    login(values);
  };

  return (
    <Grid>
      <LoginForm onSubmit={handleSubmit} />
    </Grid>
  );
};

export default LoginPage;
