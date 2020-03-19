import React, { FunctionComponent } from "react";
import createStyles from "./styles";
import { Field, reduxForm } from "redux-form";
import { ILoginFormProps, ILoginFormCallProps } from "./props";
import CustomTextField from "../../shared/Form/Fields/CustomTextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormNames from "../../shared/Form/FormNames";
import CustomErrorMessage from "../../shared/Form/Fields/CustomErrorMessage";

const LoginForm: FunctionComponent<ILoginFormProps &
  ILoginFormCallProps> = props => {
  const { handleSubmit } = props;

  const classes = createStyles();

  return (
    <form onSubmit={handleSubmit}>
      <Grid item container direction="column">
        <Field
          name="email"
          label="Email"
          required
          component={CustomTextField}
          type="email"
        />
        <Field
          name="password"
          label="Пароль"
          required
          component={CustomTextField}
          type="password"
        />
        <Field name="errorMessage" component={CustomErrorMessage} />
      </Grid>
      <Button type="submit">submit</Button>
    </form>
  );
};

export default reduxForm({
  form: FormNames.LoginForm.name
})(LoginForm);
