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
        />
        <Field
          name="confirmPassword"
          label="Подтвердите пароль"
          required
          component={CustomTextField}
          validate={confirmation({ field: "password", fieldLabel: "Пароль" })}
          type="password"
        />
        <Field name="errorMessage" component={CustomErrorMessage} />
      </Grid>
      <Button type="submit">submit</Button>
    </form>
  );
};

export default reduxForm({
  form: FormNames.RegistrationForm.name
})(RegistrationForm);
