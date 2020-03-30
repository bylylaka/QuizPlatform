import React, { FunctionComponent, useState } from "react";
import { ICreateQuizFormProps, ICreateQuizFormCallProps } from "./props";
import createStyles from "./styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormNames from "../../shared/Form/FormNames";
import CssBaseline from "@material-ui/core/CssBaseline";
import MaterialLink from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Link from "@material-ui/core/Link";
import AddQuestion from "./../AddQuestion/AddQuestion";
import Question from "../../../shared/models/quiz/Question";
import Container from "@material-ui/core/Container";
import EditQuestion from "../EditQuestion/EditQuestion";
import { Field, FieldArray, reduxForm } from "redux-form";
import customTextField from "../../shared/Form/Fields/CustomTextField";

export const CreateQuizForm: FunctionComponent<ICreateQuizFormProps &
  ICreateQuizFormCallProps> = props => {
  const { handleSubmit, formValues } = props;

  const classes = createStyles();

  const renderQuestions = (params: any) => {
    return (
      <>
        <AddQuestion fields={params["fields"]} />
        {(params["fields"] as []).map((question: any, index: number) => {
          // В этом методе надо вызвать editQuestion, и там выставить разные филды внутри вопроса в зависимости от выброанного типа

          // Использлвать для определеия значения типа
          console.log(formValues["questions"][index]);

          return (
            <>
              <Field
                required
                name={`${question}.title`}
                label="Тител"
                fullWidth
                component={customTextField}
              />
            </>
          );
        })}
      </>
    );
  };

  const renderQuestionsListItems = (): JSX.Element[] => {
    // remove ----------------------------------------------------------
    let MOQ = new Question("test");
    return [<EditQuestion question={MOQ} />, <EditQuestion question={MOQ} />];
    // -----------------------------------------------------------------

    // let items = questions.map(question => (
    //   <EditQuestionContainer
    //     question={question}
    //     onSubmit={(e: Question) => {
    //       console.log(e);
    //     }}
    //   />
    // ));
    // return items;
  };

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
