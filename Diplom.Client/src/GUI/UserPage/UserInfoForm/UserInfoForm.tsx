import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import createStyles from "./styles";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { IUserInfoFormProps, IUserInfoFormCallProps } from "./props";
import CustomTextField from "../../shared/Form/Fields/CustomTextField";
import CustomSelectField from "../../shared/Form/Fields/CustomSelectField";
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
import CountrySateCity from "country-state-city";
import CustomDateField from "../../shared/Form/Fields/CustomDateField";
import Education from "../../../shared/models/user/Education";
import MaritialStatus from "../../../shared/models/user/MaritalStatus";
import CustomCheckboxField from "../../shared/Form/Fields/CustomCheckboxField";

const UserInfoForm: FunctionComponent<
  IUserInfoFormProps & IUserInfoFormCallProps
> = (props) => {
  const { handleSubmit, canEdit, avatar, country } = props;

  const classes = createStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const getCountriesOptions = (): JSX.Element[] => {
    let countries = CountrySateCity.getAllCountries();
    return countries.map((c) => <option value={c.id}>{c.name}</option>);
  };

  const getCitiesOptions = (): JSX.Element[] => {
    if (country) {
      let cities = CountrySateCity.getStatesOfCountry(`${country}`);
      return cities.map((c) => <option value={c.id}>{c.name}</option>);
    }
    return [];
  };

  const getEdicationOptions = (): JSX.Element[] => {
    return [
      <option value={Education.No}>No education</option>,
      <option value={Education.middleCommon}>Associate Degrees</option>,
      <option value={Education.middleProfessional}>Bachelor’s Degrees</option>,
      <option value={Education.Bachelor}>Master’s Degrees</option>,
      <option value={Education.Magister}>Doctoral Degrees</option>,
    ];
  };

  const getMaritalStatusOptions = (): JSX.Element[] => {
    return [
      <option value={MaritialStatus.Single}>Single</option>,
      <option value={MaritialStatus.Meeting}>Date with someone</option>,
      <option value={MaritialStatus.Married}>Married</option>,
      <option value={MaritialStatus.Divorced}>Divorced</option>,
    ];
  };

  const getAvatarUrl = () => {
    if (!avatar) {
      return "images\\\\social_network.jpg";
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
            backgroundImage: `url(${getAvatarUrl()})`,
          }}
        >
          <Field
            name="avatar"
            label="Avatar"
            component={CustomDropZoneField}
            disabled={!canEdit}
            type="file"
          />
        </Grid>
        <Field
          name="email"
          label="Email"
          required
          disabled={!canEdit}
          component={CustomTextField}
          type="email"
        />
        <Field
          name="name"
          label="Name"
          disabled={!canEdit}
          required
          component={CustomTextField}
        />
        <ListItem button onClick={handleClick}>
          <ListItemText secondary={open ? "Show less" : "Show more"} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={open}
          timeout="auto"
          classes={{
            wrapperInner: classes.collapse,
          }}
        >
          <Field
            name="gender"
            label="Gender"
            disabled={!canEdit}
            component={CustomSelectField}
            parse={(value: string) => (value ? Number(value) : null)}
          >
            <option value={Gender.Male}>Male</option>
            <option value={Gender.Female}>Female</option>
          </Field>
          <Field
            name="country"
            label="Country"
            disabled={!canEdit}
            component={CustomSelectField}
          >
            <option>Choose country</option>
            {getCountriesOptions()}
          </Field>
          {country && (
            <Field
              name="city"
              disabled={!canEdit}
              label="City"
              component={CustomSelectField}
            >
              <option>Choose city</option>
              {getCitiesOptions()}
            </Field>
          )}
          <Field
            name="birth"
            label="Date of birth"
            component={CustomDateField}
            disabled={!canEdit}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Field
            name="education"
            label="Education"
            disabled={!canEdit}
            component={CustomSelectField}
          >
            <option>Select academic degree level</option>
            {getEdicationOptions()}
          </Field>
          <Field
            name="maritalStatus"
            disabled={!canEdit}
            label="Marital status"
            component={CustomSelectField}
          >
            <option>Select marital status</option>
            {getMaritalStatusOptions()}
          </Field>
          <Field
            name="loveAnimals"
            disabled={!canEdit}
            label="Love animals?"
            component={CustomCheckboxField}
          />
          <Field
            name="smoke"
            label="Smoke?"
            disabled={!canEdit}
            component={CustomCheckboxField}
          />
          <Field
            name="drink"
            disabled={!canEdit}
            label="Drink?"
            component={CustomCheckboxField}
          />
          <Field
            name="childsCount"
            label="Childs count"
            component={CustomTextField}
            type="number"
            disabled={!canEdit}
            parse={(value: string) => (value ? Number(value) : null)}
          />
          <Field
            name="work"
            label="Work?"
            disabled={!canEdit}
            component={CustomCheckboxField}
          />
          <Field
            name="study"
            disabled={!canEdit}
            label="Study?"
            component={CustomCheckboxField}
          />
          <Field
            name="salary"
            label="Monthly salary"
            disabled={!canEdit}
            component={CustomTextField}
            type="number"
            parse={(value: string) => (value ? Number(value) : null)}
          />
        </Collapse>
      </Grid>
      <Button
        type="submit"
        variant="outlined"
        className={classes.submitButton}
        disabled={!props.dirty}
      >
        Save changes
      </Button>
    </form>
  );
};

export default reduxForm({
  form: FormNames.ProfileInfoForm.name,
  enableReinitialize: true,
})(UserInfoForm as any);
