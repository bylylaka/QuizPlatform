import React, { FunctionComponent } from "react";
import createStyles from "./styles";
import { Field, reduxForm } from "redux-form";
import { IRegistrationFormProps, IRegistrationFormCallProps } from "./props";
import CustomTextField from "../../shared/Form/Fields/CustomTextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormNames from "../../shared/Form/FormNames";
import CustomErrorMessage from "../../shared/Form/Fields/CustomErrorMessage";

const RegistrationForm: FunctionComponent<IRegistrationFormProps &
  IRegistrationFormCallProps> = props => {
  const { handleSubmit } = props;

  const classes = createStyles();

  //TODO: add an extra data
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
        <Field
          name="confirmPassword"
          label="Подтвердите пароль"
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

const testType = typeof FormNames;
export default reduxForm({
  form: FormNames.RegistrationForm.name
})(RegistrationForm);
