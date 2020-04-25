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
      <option value={Education.No}>No education</option>,
      <option value={Education.middleCommon}>Associate Degrees</option>,
      <option value={Education.middleProfessional}>
        Bachelor’s Degrees
      </option>,
      <option value={Education.Bachelor}>Master’s Degrees</option>,
      <option value={Education.Magister}>Doctoral Degrees</option>
    ];
  };

  const getMaritalStatusOptions = (): JSX.Element[] => {
    return [
      <option value={MaritialStatus.Single}>Single</option>,
      <option value={MaritialStatus.Meeting}>Date with someone</option>,
      <option value={MaritialStatus.Married}>Married</option>,
      <option value={MaritialStatus.Divorced}>Divorced</option>
    ];
  };

  const getChildsCountOptions = (): JSX.Element[] => {
    return [
      <option value={ChildsCount.None}>No childs</option>,
      <option value={ChildsCount.One}>1</option>,
      <option value={ChildsCount.Two}>2</option>,
      <option value={ChildsCount.Three}>3</option>,
      <option value={ChildsCount.Four}>4</option>,
      <option value={ChildsCount.MoreFive}>5+</option>,
    ];
  };

  const getSalaryOptions = (): JSX.Element[] => {
    return [
      <option value={Salary.None}>Doesnt work</option>,
      <option value={Salary.Before10}>To 10 000</option>,
      <option value={Salary.Before30}>From 000 to 30 000</option>,
      <option value={Salary.Before70}>From 30 000 to 70 000</option>,
      <option value={Salary.Before150}>From 70 000 to 150 000</option>,
      <option value={Salary.More150}>More then 150 000</option>,
    ];
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" align="center">
        Filter
      </Typography>
      <Grid item container direction="column">
        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="age"
            style={{ width: "100%" }}
            label="Age"
            component={CustomRangeField}
          />
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="gender"
            label="Gender"
            component={CustomSelectField}
            style={{ width: "100%" }}
            parse={(value: string) => (value ? Number(value) : null)}
          >
            <option value={Gender.Male}>Male</option>
            <option value={Gender.Female}>Female</option>
          </Field>
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="country"
            label="Country"
            style={{ width: "100%" }}
            component={CustomSelectField}
          >
            <option>Country</option>
            {getCountriesOptions()}
          </Field>
        </ActivationFieldContainer>

        {selectedCountry && (
          <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
            <Field
              name="city"
              style={{ width: "100%" }}
              label="City"
              component={CustomSelectField}
            >
              {/* <option>Choose city</option> */}
              {getCitiesOptions()}
            </Field>
          </ActivationFieldContainer>
        )}

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="education"
            label="Education"
            component={CustomSelectField}
          >
            {/* <option>Choose education level</option> */}
            {getEdicationOptions()}
          </Field>
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="maritalStatus"
            label="Marital status"
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
            label="Love animans"
            component={CustomCheckboxField}
          />
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field name="smoke" label="Smoke" component={CustomCheckboxField} />
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="drink"
            label="Drink"
            component={CustomCheckboxField}
          />
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="childsCount"
            label="Childs count"
            component={CustomMultipleSelectField}
          >
            {getChildsCountOptions()}
          </Field>
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field name="work" label="Work" component={CustomCheckboxField} />
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field name="study" label="Study" component={CustomCheckboxField} />
        </ActivationFieldContainer>

        <ActivationFieldContainer formName={FormNames.filterAnswers.name}>
          <Field
            name="salary"
            label="Mounth salary"
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
