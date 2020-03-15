import React, { FunctionComponent } from "react";
import { ILoginPageProps, ILoginPageCallProps } from "./props";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import createStyles from "./styles";

const LoginPage: FunctionComponent<ILoginPageProps &
  ILoginPageCallProps> = props => {
  const classes = createStyles();

  return <Typography>LoginPage</Typography>;
};

export default LoginPage;
