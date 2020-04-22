import React, { FunctionComponent } from "react";
import {
  IQuizStatisticsFilterFormProps,
  IQuizStatisticsFilterFormCallProps,
} from "./props";
import FormNames from "../../../shared/Form/FormNames";
import Grid from "@material-ui/core/Grid";
import CustomRangeField from "../../../shared/Form/Fields/CustomRangeField";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import Typography from "@material-ui/core/Typography";
import CustomSelectField from "../../../shared/Form/Fields/CustomSelectField";
import CustomMultipleSelectField from "../../../shared/Form/Fields/CustomMultipleSelectField";
import Gender from "../../../../shared/models/user/Gender";
import CountrySateCity from "country-state-city";
import Education from "../../../../shared/models/user/Education";
import MaritialStatus from "../../../../shared/models/user/MaritalStatus";
import CustomCheckboxField from "../../../shared/Form/Fields/CustomCheckboxField";
import ChildsCount from "../../../../shared/models/quiz/Filter/ChildsCount";
import Salary from "../../../../shared/models/quiz/Filter/Salary";
import ActivationFieldContainer from "../../../shared/Form/Fields/ActivationField/ActivationFieldContainer";

export const QuizStatisticsFilterForm: FunctionComponent<
  IQuizStatisticsFilterFormProps &
    IQuizStatisticsFilterFormCallProps &
    InjectedFormProps
> = (props) => {
  const { handleSubmit, selectedCountry } = props;

  const getCountriesOptions = (): JSX.Element[] => {
    let countries = CountrySateCity.getAllCountries();
    return countries.map((c) => <option value={c.id}>{c.name}</option>);
  };

  const getCitiesOptions = (): JSX.Element[] => {
    if (selectedCountry) {
      let cities = CountrySateCity.getStatesOfCountry(`${selectedCountry}`);
      return cities.map((c) => <option value={c.id}>{c.name}</option>);
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
      <option value={Education.Magister}>Магистр</option>,
    ];
  };

  const getMaritalStatusOptions = (): JSX.Element[] => {
    return [
      <option value={MaritialStatus.Single}>Одиночка</option>,
      <option value={MaritialStatus.Meeting}>Встречаюсь</option>,
      <option value={MaritialStatus.Married}>В замужестве</option>,
      <option value={MaritialStatus.Divorced}>После развода</option>,
    ];
  };

  const getChildsCountOptions = (): JSX.Element[] => {
    return [
      <option value={ChildsCount.None}>Нет детей</option>,
      <option value={ChildsCount.One}>1</option>,
      <option value={ChildsCount.Two}>2</option>,
      <option value={ChildsCount.Three}>3</option>,
      <option value={ChildsCount.Four}>4</option>,
      <option value={ChildsCount.MoreFive}>5+</option>,
    ];
  };

  const getSalaryOptions = (): JSX.Element[] => {
    return [
      <option value={Salary.None}>Не имеет работы</option>,
      <option value={Salary.Before10}>До 10 000</option>,
      <option value={Salary.Before30}>От 10 000 до 30 000</option>,
      <option value={Salary.Before70}>От 30 000 до 70 000</option>,
      <option value={Salary.Before150}>от 70 000 до 150 000</option>,
      <option value={Salary.More150}>Свыше 150 000</option>,
    ];
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" align="center">
        Фильтр
      </Typography>
      <Grid item container direction="column">
        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="age"
            style={{ width: "100%" }}
            label="Возраст"
            component={CustomRangeField}
          />
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="gender"
            label="Пол"
            component={CustomSelectField}
            style={{ width: "100%" }}
            parse={(value: string) => (value ? Number(value) : null)}
          >
            <option value={Gender.Male}>М</option>
            <option value={Gender.Female}>Ж</option>
          </Field>
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="country"
            label="Страна"
            style={{ width: "100%" }}
            component={CustomSelectField}
          >
            <option>Выберите страну</option>
            {getCountriesOptions()}
          </Field>
        </ActivationFieldContainer>

        {selectedCountry && (
          <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
            <Field
              name="city"
              style={{ width: "100%" }}
              label="Город"
              component={CustomSelectField}
            >
              <option>Выберите город</option>
              {getCitiesOptions()}
            </Field>
          </ActivationFieldContainer>
        )}

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="education"
            label="Образование"
            component={CustomSelectField}
          >
            <option>Выберите уровень образования</option>
            {getEdicationOptions()}
          </Field>
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="maritalStatus"
            label="Семейное положение"
            component={CustomMultipleSelectField}
            customProps={{
              container: {
                style: {
                  width: "100%",
                },
              },
            }}
          >
            {getMaritalStatusOptions()}
          </Field>
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="loveAnimals"
            label="Любит животных"
            component={CustomCheckboxField}
          />
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field name="smoke" label="Курит" component={CustomCheckboxField} />
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="drink"
            label="Выпивает"
            component={CustomCheckboxField}
          />
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="childsCount"
            label="Количество детей"
            component={CustomMultipleSelectField}
          >
            {getChildsCountOptions()}
          </Field>
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field name="work" label="Работает" component={CustomCheckboxField} />
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field name="study" label="Учится" component={CustomCheckboxField} />
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="salary"
            label="Ежемесячная зарплата"
            component={CustomMultipleSelectField}
          >
            {getSalaryOptions()}
          </Field>
        </ActivationFieldContainer>
      </Grid>
    </form>
  );
};

export default reduxForm({
  form: FormNames.filterAnswers.name,
  onChange: (values, dispatch, props, previousValues) => {
    (props as any).submit();
  },
})(QuizStatisticsFilterForm as any) as any;