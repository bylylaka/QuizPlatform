import React, { FunctionComponent } from "react";
import createStyles from "./styles";
import { Field, reduxForm } from "redux-form";
import { ILoginFormProps, ILoginFormCallProps } from "./props";
import CustomTextField from "../../shared/Form/Fields/CustomTextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormNames from "../../shared/Form/FormNames";
import CustomErrorMessage from "../../shared/Form/Fields/CustomErrorMessage";
import { Link } from "react-router-dom";

const LoginForm: FunctionComponent<ILoginFormProps &
  ILoginFormCallProps> = props => {
  const { handleSubmit } = props;

  const classes = createStyles();

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Field
        name="email"
        label="Email"
        required
        component={CustomTextField}
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        autoFocus
      />
      <Field
        name="password"
        label="Пароль"
        required
        component={CustomTextField}
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Field name="errorMessage" component={CustomErrorMessage} />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
      <Grid container>
        <Link to="/register" className={classes.registerButton}>
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
    </form>
  );
};

export default reduxForm({
  form: FormNames.LoginForm.name
})(LoginForm);
