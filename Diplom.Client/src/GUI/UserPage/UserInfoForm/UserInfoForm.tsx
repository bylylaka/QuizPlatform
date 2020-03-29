import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from "react";
import createStyles from "./styles";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { IUserInfoFormProps, IUserInfoFormCallProps } from "./props";
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
import CountrySateCity from "country-state-city";
import CustomDateField from "../../shared/Form/Fields/CustomDateField";
import Education from "../../../shared/models/user/Education";
import MaritialStatus from "../../../shared/models/user/MaritalStatus";
import CustomCheckboxField from "../../shared/Form/Fields/CustomCheckboxField";

const UserInfoForm: FunctionComponent<IUserInfoFormProps &
  IUserInfoFormCallProps> = props => {
  const { handleSubmit, canEdit, avatar, country } = props;

  const classes = createStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const getCountriesOptions = (): JSX.Element[] => {
    let countries = CountrySateCity.getAllCountries();
    return countries.map(c => <option value={c.id}>{c.name}</option>);
  };

  const getCitiesOptions = (): JSX.Element[] => {
    if (country) {
      let cities = CountrySateCity.getStatesOfCountry(`${country}`);
      return cities.map(c => <option value={c.id}>{c.name}</option>);
    }
    return [];
  };

  const getEdicationOptions = (): JSX.Element[] => {
    return [
      <option value={Education.No}>Без образования</option>,
      <option value={Education.middleCommon}>Среднее общее</option>,
      <option value={Education.middleProfessional}>
        Среднее профессиональное
      </option>,
      <option value={Education.Bachelor}>Бакалавр</option>,
      <option value={Education.Magister}>Магистр</option>
    ];
  };

  const getMaritalStatusOptions = (): JSX.Element[] => {
    return [
      <option value={MaritialStatus.Single}>Одиночка</option>,
      <option value={MaritialStatus.Meeting}>Встречаюсь</option>,
      <option value={MaritialStatus.Married}>В замужестве</option>,
      <option value={MaritialStatus.Divorced}>После развода</option>
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
            backgroundImage: `url(${getAvatarUrl()})`
          }}
        >
          <Field
            name="avatar"
            label="avatar"
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
          label="Имя"
          disabled={!canEdit}
          required
          component={CustomTextField}
        />
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
            component={CustomTextField}
            disabled={!canEdit}
            type="number"
            parse={(value: string) => (value ? Number(value) : null)}
          />
          <Field
            name="gender"
            label="Пол"
            disabled={!canEdit}
            component={CutomSelectField}
            parse={(value: string) => (value ? Number(value) : null)}
          >
            <option value={Gender.Male}>М</option>
            <option value={Gender.Female}>Ж</option>
          </Field>
          <Field
            name="country"
            label="Страна"
            disabled={!canEdit}
            component={CutomSelectField}
          >
            <option>Выберите страну</option>
            {getCountriesOptions()}
          </Field>
          {country && (
            <Field
              name="city"
              disabled={!canEdit}
              label="Город"
              component={CutomSelectField}
            >
              <option>Выберите город</option>
              {getCitiesOptions()}
            </Field>
          )}
          <Field
            name="birth"
            label="Дата рождения"
            component={CustomDateField}
            disabled={!canEdit}
            InputLabelProps={{
              shrink: true
            }}
          />
          <Field
            name="education"
            label="Образование"
            disabled={!canEdit}
            component={CutomSelectField}
          >
            <option>Выберите ваш уровень образования</option>
            {getEdicationOptions()}
          </Field>
          <Field
            name="maritalStatus"
            disabled={!canEdit}
            label="Семейное положение"
            component={CutomSelectField}
          >
            <option>Выберите ваше семейное положение</option>
            {getMaritalStatusOptions()}
          </Field>
          <Field
            name="loveAnimals"
            disabled={!canEdit}
            label="Любите животных?"
            component={CustomCheckboxField}
          />
          <Field
            name="smoke"
            label="Курите?"
            disabled={!canEdit}
            component={CustomCheckboxField}
          />
          <Field
            name="drink"
            disabled={!canEdit}
            label="Выпиваете?"
            component={CustomCheckboxField}
          />
          <Field
            name="childsCount"
            label="Сколько у вас детей?"
            component={CustomTextField}
            type="number"
            disabled={!canEdit}
            parse={(value: string) => (value ? Number(value) : null)}
          />
          <Field
            name="work"
            label="Работаете?"
            disabled={!canEdit}
            component={CustomCheckboxField}
          />
          <Field
            name="study"
            disabled={!canEdit}
            label="Учитесь?"
            component={CustomCheckboxField}
          />
          <Field
            name="salary"
            label="Сколько ежемесячно получаете?"
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
        Сохранить изменения
      </Button>
    </form>
  );
};

export default reduxForm({
  form: FormNames.ProfileInfoForm.name,
  enableReinitialize: true
})(UserInfoForm as any);
