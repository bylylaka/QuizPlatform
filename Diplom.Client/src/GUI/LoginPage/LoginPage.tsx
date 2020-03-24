import React, { FunctionComponent } from "react";
import { ILoginPageProps, ILoginPageCallProps } from "./props";
import createStyles from "./styles";
import LoginForm from "./LoginForm/LoginForm";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

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
      <Link to="/register" className={classes.registerButton}>
        <Button>Register instead</Button>
      </Link>
    </Grid>
  );
};

export default LoginPage;
