import React, { FunctionComponent, useState } from "react";
import { IEditQuestionProps, IEditQuestionCallProps } from "./props";
import createStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import FormNames from "../../shared/Form/FormNames";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import Card from "@material-ui/core/Card";
import customTextField from "../../shared/Form/Fields/CustomTextField";
import customSelectField from "../../shared/Form/Fields/CustomSelectField";
import QuestionType from "../../../shared/models/quiz/QuestionType";

export const EditQuestion: FunctionComponent<IEditQuestionProps &
  IEditQuestionCallProps> = props => {
  const { question } = props;

  const classes = createStyles();

  return (
    <Card className={classes.card}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Field
            required
            name="title"
            label="Формулировка вопроса"
            fullWidth
            component={customTextField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            required
            name="type"
            label="Last name"
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
        {/* <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="billing address-line1"
            />
          </Grid> */}
      </Grid>
    </Card>
  );
};

export default EditQuestion;
