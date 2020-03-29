import React, { FunctionComponent } from "react";
import { ILoginPageProps, ILoginPageCallProps } from "./props";
import createStyles from "./styles";
import LoginForm from "./LoginForm/LoginForm";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import MaterialLink from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export const LoginPage: FunctionComponent<ILoginPageProps &
  ILoginPageCallProps> = props => {
  const { login } = props;

  const classes = createStyles();

  const handleSubmit = (values: any) => {
    login(values);
  };

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <MaterialLink color="inherit">Diplom</MaterialLink>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <LoginForm onSubmit={handleSubmit} />
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default LoginPage;
