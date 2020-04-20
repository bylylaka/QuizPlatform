import React, { FunctionComponent, useEffect, useState } from "react";
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
import Gender from "../../../../shared/models/user/Gender";
import CountrySateCity from "country-state-city";
import Education from "../../../../shared/models/user/Education";

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
      <option value={Education.Magister}>Магистр</option>
    ];
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" align="center">
        Фильтр
      </Typography>
      <Grid item>
        <Field
          name="birth"
          label="Дата рождения"
          component={CustomRangeField}
        />
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
        <Field
          name="country"
          label="Страна"
          style={{ width: "100%" }}
          component={CustomSelectField}
        >
          <option>Выберите страну</option>
          {getCountriesOptions()}
        </Field>
        {selectedCountry && (
          <Field
            name="city"
            style={{ width: "100%" }}
            label="Город"
            component={CustomSelectField}
          >
            <option>Выберите город</option>
            {getCitiesOptions()}
          </Field>
        )}
        <Field
          name="education"
          label="Образование"
          component={CustomSelectField}
        >
          <option>Выберите уровень образования</option>
          {getEdicationOptions()}
        </Field>
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
