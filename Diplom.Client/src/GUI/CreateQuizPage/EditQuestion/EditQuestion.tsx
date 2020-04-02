import React, { FunctionComponent, useState } from "react";
import { IEditQuestionProps, IEditQuestionCallProps } from "./props";
import createStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import FormNames from "../../shared/Form/FormNames";
import { reduxForm, Field, InjectedFormProps, FieldArray } from "redux-form";
import Card from "@material-ui/core/Card";
import customTextField from "../../shared/Form/Fields/CustomTextField";
import customSelectField from "../../shared/Form/Fields/CustomSelectField";
import QuestionType from "../../../shared/models/quiz/QuestionType";
import AddQuestion from "../AddQuestion/AddQuestion";

const removeOption = () => {
  // TODO: add removing options after change from select to another type
};

const renderOptions = (params: any) => {
  const classes = createStyles();

  return (
    <span className={classes.optionsPart}>
      <AddQuestion fields={params["fields"]} title="Добавить опцию" />
      {(params["fields"] as []).length > 0 && (
        <Grid className={classes.padding}>
          {(params["fields"] as []).map((field: string, index: number) => {
            return (
              <Grid container spacing={3}>
                <Grid item sm={9}>
                  <Field
                    required
                    name={`${field}.title`}
                    label="Формулировка ответа"
                    fullWidth
                    component={customTextField}
                  />
                </Grid>
              </Grid>
              // <EditQuestion
              //   key={index}
              //   fieldPrefix={field}
              //   question={params["fields"].get(index)}
              // />
            );
          })}
        </Grid>
      )}
    </span>
  );
};

export const EditQuestion: FunctionComponent<IEditQuestionProps &
  IEditQuestionCallProps> = props => {
  const { fieldPrefix, question } = props;

  const classes = createStyles();

  const renderOptionalFields = () => {
    if (question && question.type == QuestionType.Select) {
      return (
        <FieldArray name={`${fieldPrefix}.options`} component={renderOptions} />
      );
      // return (
      // <Grid container justify="center">
      //   <Button onClick={addOption} variant="contained" color="primary">
      //     Добавить опцию
      //   </Button>
      // </Grid>
      // );
    }
  };

  return (
    <Card className={classes.card}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Field
            required
            name={`${fieldPrefix}.title`}
            label="Формулировка вопроса"
            fullWidth
            component={customTextField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            required
            name={`${fieldPrefix}.type`}
            label="Тип поля"
            fullWidth
            component={customSelectField}
          >
            <option>Выберите тип поля</option>
            <option value={QuestionType.Text}>Текстовое поле</option>
            <option value={QuestionType.Select}>Список</option>
            <option value={QuestionType.Checkbox}>Чекбокс</option>
            <option value={QuestionType.Date}>Дата</option>
            <option value={QuestionType.File}>Файл</option>
          </Field>
        </Grid>
        {renderOptionalFields()}
      </Grid>
    </Card>
  );
};

export default EditQuestion;
