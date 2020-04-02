import React, { FunctionComponent, useState } from "react";
import { ICreateQuizFormProps, ICreateQuizFormCallProps } from "./props";
import createStyles from "./styles";
import FormNames from "../../shared/Form/FormNames";
import AddQuestion from "./../AddQuestion/AddQuestion";
import Container from "@material-ui/core/Container";
import EditQuestion from "../EditQuestion/EditQuestion";
import { FieldArray, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";

const renderQuestions = (params: any) => {
  const classes = createStyles();

  return (
    <>
      <AddQuestion fields={params["fields"]} title="Добавить вопрос" />
      {(params["fields"] as []).length > 0 && (
        <Grid className={classes.questionsBlock}>
          {(params["fields"] as []).map((field: string, index: number) => {
            // Использлвать для определеия значения типа
            // console.log(field); //use as prefix to Field name
            // console.log(formValues["questions"][index]); // {title: "aaa", ...}
            // console.log(params["fields"]); //Object(3)
            // console.log(params["fields"].get(index)); // {title: "aaa", ...}
            // console.log(formValues["questions"]); // {title: "aaa", ...}

            return (
              <EditQuestion
                key={index}
                fieldPrefix={field}
                question={params["fields"].get(index)}
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
    <form>
      <Container component="main" maxWidth="lg">
        <FieldArray name="questions" component={renderQuestions} />
      </Container>
    </form>
  );
};

export default reduxForm({
  form: FormNames.createQuizForm.name,
  enableReinitialize: true
})(CreateQuizForm as any) as any;
