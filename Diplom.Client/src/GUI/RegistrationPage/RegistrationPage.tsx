import React, { FunctionComponent } from "react";
import { IRegistrationPageProps, IRegistrationPageCallProps } from "./props";
import createStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

export const RegistrationPage: FunctionComponent<IRegistrationPageProps &
  IRegistrationPageCallProps> = props => {
  const { register } = props;

  const classes = createStyles();

  const handleSubmit = (values: any) => {
    register(values);
  };

  return (
    <Grid>
      <RegistrationForm onSubmit={handleSubmit} />
    </Grid>
  );
};

export default RegistrationPage;
