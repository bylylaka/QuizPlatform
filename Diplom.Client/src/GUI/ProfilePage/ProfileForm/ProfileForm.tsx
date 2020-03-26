import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from "react";
import createStyles from "./styles";
import { Field, reduxForm } from "redux-form";
import { IProfileFormProps, IProfileFormCallProps } from "./props";
import CustomTextField from "../../shared/Form/Fields/CustomTextField";
import CutomSelectField from "../../shared/Form/Fields/CustomSelectField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormNames from "../../shared/Form/FormNames";
import Gender from "../../../shared/models/user/Gender";
import CustomDropZoneField from "../../shared/Form/Fields/CustomDropZoneField";

const ProfileForm: FunctionComponent<IProfileFormProps &
  IProfileFormCallProps> = props => {
  const { handleSubmit } = props;

  const classes = createStyles();

  return (
    <form onSubmit={handleSubmit}>
      <Grid item container direction="column">
        <Field
          name="avatar"
          label="avatar"
          component={CustomDropZoneField}
          type="file"
        />
        <Field
          name="email"
          label="Email"
          required
          component={CustomTextField}
          type="email"
        />
        <Field name="name" label="Имя" required component={CustomTextField} />
        <Field
          name="age"
          label="Возраст"
          required
          component={CustomTextField}
          type="number"
          parse={(value: string) => (value ? Number(value) : null)}
        />
        <Field
          name="gender"
          label="Пол"
          required
          component={CutomSelectField}
          parse={(value: string) => (value ? Number(value) : null)}
        >
          <option value={Gender.Male}>М</option>
          <option value={Gender.Female}>Ж</option>
        </Field>
      </Grid>
      <Button type="submit">submit</Button>
    </form>
  );
};

export default reduxForm({
  form: FormNames.ProfileForm.name
})(ProfileForm);
