import React, { FunctionComponent } from "react";
import { IRegistrationPageProps, IRegistrationPageCallProps } from "./props";
import createStyles from "./styles";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MaterialLink from "@material-ui/core/Link";

export const RegistrationPage: FunctionComponent<IRegistrationPageProps &
  IRegistrationPageCallProps> = props => {
  const { register } = props;

  const classes = createStyles();

  const handleSubmit = (values: any) => {
    register(values);
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
          Sign up
        </Typography>
        <RegistrationForm onSubmit={handleSubmit} />
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default RegistrationPage;
