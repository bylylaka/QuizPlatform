import React, { FunctionComponent } from "react";
import createStyles from "./styles";
import { Field, reduxForm } from "redux-form";
import { IRegistrationFormProps, IRegistrationFormCallProps } from "./props";
import CustomTextField from "../../shared/Form/Fields/CustomTextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormNames from "../../shared/Form/FormNames";
import CustomErrorMessage from "../../shared/Form/Fields/CustomErrorMessage";
import {
  required,
  email,
  length,
  confirmation,
  format
} from "redux-form-validators";
import { Link } from "react-router-dom";

const RegistrationForm: FunctionComponent<IRegistrationFormProps &
  IRegistrationFormCallProps> = props => {
  const { handleSubmit } = props;

  const classes = createStyles();

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            name="email"
            label="Email"
            required
            component={CustomTextField}
            type="email"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="password"
            label="Password"
            required
            component={CustomTextField}
            validate={[
              required(),
              length({ min: 6 }),
              format({
                with: /[a-z]/,
                message: "Password must include at least one lowercase"
              }),
              format({
                with: /[A-Z]/,
                message: "Password must include at least one uppercase"
              }),
              format({
                with: /[0-9]/,
                message: "Password must include at least one digit"
              }),
              format({
                without: /^[a-zA-Z0-9]*$/,
                message: "Password should contain at least 1 special character"
              })
            ]}
            type="password"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="confirmPassword"
            label="Confirm password"
            required
            component={CustomTextField}
            validate={confirmation({ field: "password", fieldLabel: "Password" })}
            type="password"
            variant="outlined"
            fullWidth
          />
          <Field name="errorMessage" component={CustomErrorMessage} />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link to="/login" className={classes.loginButton}>
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default reduxForm({
  form: FormNames.RegistrationForm.name
})(RegistrationForm);
