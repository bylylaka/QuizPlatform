import React, { FunctionComponent, useState } from "react";
import { ICreateQuizFormProps, ICreateQuizFormCallProps } from "./props";
import createStyles from "./styles";
import FormNames from "../../shared/Form/FormNames";
import AddQuestion from "./../AddQuestion/AddQuestion";
import Container from "@material-ui/core/Container";
import EditQuestion from "../EditQuestion/EditQuestion";
import { FieldArray, reduxForm, Field } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import customTextField from "../../shared/Form/Fields/CustomTextField";

const renderQuestions = (params: any) => {
  const classes = createStyles();

  return (
    <>
      <AddQuestion fields={params["fields"]} title="Добавить вопрос" />

      {(params["fields"] as []).length > 0 && (
        <Grid className={classes.questionsBlock}>
          {(params["fields"] as []).map((field: string, index: number) => {
            return (
              <EditQuestion
                key={index}
                fieldPrefix={field}
                fields={params["fields"]}
                question={params["fields"].get(index)}
                index={index}
              />
            );
          })}
        </Grid>
      )}
    </>
  );
};

export const CreateQuizForm: FunctionComponent<ICreateQuizFormProps &
  ICreateQuizFormCallProps> = props => {
  const { handleSubmit, formValues } = props;

  const classes = createStyles();

  return (
    <form onSubmit={handleSubmit}>
      <Container component="main" maxWidth="lg">
        <Field
          required
          name="title"
          label="Наименование опроса"
          fullWidth
          component={customTextField}
          variant="outlined"
          className={classes.titleField}
        />
        <FieldArray name="questions" component={renderQuestions} />
      </Container>

      {formValues && formValues.questions && formValues.questions.length > 0 && (
        <Grid container justify="center">
          <Button type="submit" variant="contained" color="primary">
            Подтвердить
          </Button>
        </Grid>
      )}
    </form>
  );
};

export default reduxForm({
  form: FormNames.CreateQuizForm.name,
  enableReinitialize: true
})(CreateQuizForm as any) as any;
