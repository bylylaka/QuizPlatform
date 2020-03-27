import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from "react";
import createStyles from "./styles";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { IProfileInfoFormProps, IProfileInfoFormCallProps } from "./props";
import CustomTextField from "../../shared/Form/Fields/CustomTextField";
import CutomSelectField from "../../shared/Form/Fields/CustomSelectField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormNames from "../../shared/Form/FormNames";
import Gender from "../../../shared/models/user/Gender";
import CustomDropZoneField from "../../shared/Form/Fields/CustomDropZoneField";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const ProfileInfoForm: FunctionComponent<IProfileInfoFormProps &
  IProfileInfoFormCallProps> = props => {
  const { handleSubmit, avatar } = props;

  const classes = createStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const getAvatarUrl = () => {
    // let backgroundPath: any = avatar;
    if (!avatar) {
      //empty avatar
      return "images\\\\social_network.jpg"; // TODO: change to default
    }
    if (typeof avatar == "string") {
      return avatar.replace("\\", "\\\\");
    }
    return (avatar as any).preview;
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Grid item container direction="column">
        <Grid
          container
          className={classes.avatarBlock}
          style={{
            backgroundImage: `url(${getAvatarUrl()})`
          }}
        >
          <Field
            name="avatar"
            label="avatar"
            component={CustomDropZoneField}
            type="file"
          />
        </Grid>
        <Field
          name="email"
          label="Email"
          required
          component={CustomTextField}
          type="email"
        />
        <Field name="name" label="Имя" required component={CustomTextField} />
        <ListItem button onClick={handleClick}>
          <ListItemText
            secondary={open ? "Показать меньше" : "Показать больше"}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={open}
          timeout="auto"
          classes={{
            wrapperInner: classes.collapse
          }}
        >
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
        </Collapse>
      </Grid>
      <Button
        type="submit"
        variant="outlined"
        className={classes.submitButton}
        disabled={!props.dirty}
      >
        Сохранить изменения
      </Button>
    </form>
  );
};

export default reduxForm({
  form: FormNames.ProfileInfoForm.name
})(ProfileInfoForm as any);
