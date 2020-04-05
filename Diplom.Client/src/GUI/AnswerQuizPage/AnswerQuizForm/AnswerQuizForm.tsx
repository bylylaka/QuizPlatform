import React, { FunctionComponent } from "react";
import { IAnswerQuizFormProps, IAnswerQuizFormCallProps } from "./props";
import createStyles from "./styles";
import FormNames from "../../shared/Form/FormNames";
import Container from "@material-ui/core/Container";
import { reduxForm, Field } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Question from "../../../shared/models/quiz/Question";
import Card from "@material-ui/core/Card";
import customTextField from "../../shared/Form/Fields/CustomTextField";
import QuestionType from "../../../shared/models/quiz/QuestionType";
import CustomCheckboxField from "../../shared/Form/Fields/CustomCheckboxField";
import customSelectField from "../../shared/Form/Fields/CustomSelectField";
import Option from "../../../shared/models/quiz/Option";
import CustomDateField from "../../shared/Form/Fields/CustomDateField";
import CustomDropZoneField from "../../shared/Form/Fields/CustomDropZoneField";

export const AnswerQuizForm: FunctionComponent<
  IAnswerQuizFormProps & IAnswerQuizFormCallProps
> = (props) => {
  const { handleSubmit, quiz } = props;

  const classes = createStyles();

  const chooseQuestion = (question: Question): JSX.Element => {
    switch (question.type) {
      case QuestionType.Text:
        return (
          <>
            <Typography>{question.title}</Typography>
            <Field
              required
              name={`${question.id}`}
              label="Ваш ответ"
              fullWidth
              component={customTextField}
            />
          </>
        );
      case QuestionType.Number:
        return (
          <>
            <Typography>{question.title}</Typography>
            <Field
              required
              name={`${question.id}`}
              label="Ваш ответ"
              fullWidth
              type="number"
              component={customTextField}
              parse={(value: string) => (value ? Number(value) : null)}
            />
          </>
        );
      case QuestionType.Checkbox:
        return (
          <Field
            required
            name={`${question.id}`}
            label={question.title}
            fullWidth
            component={CustomCheckboxField}
          />
        );
      case QuestionType.Date:
        return (
          <>
            <Typography>{question.title}</Typography>
            <Field
              required
              name={`${question.id}`}
              fullWidth
              component={CustomDateField}
            />
          </>
        );
      case QuestionType.Select:
        return (
          <>
            <Typography>{question.title}</Typography>
            <Field
              required
              name={`${question.id}`}
              label="Ваш ответ"
              fullWidth
              component={customSelectField}
              parse={(value: string) =>
                value ? Number(value) : (question.options as Option[])[0].id
              }
            >
              {(question.options as Option[]).map((o) => (
                <option value={o.id}>{o.title}</option>
              ))}
            </Field>
          </>
        );
      default:
        throw new Error();
    }
  };

  const renderQuestions = (): JSX.Element[] => {
    return (quiz.questions as Question[]).map((q) => {
      return (
        <Grid container alignItems="center">
          <Card className={classes.card}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {chooseQuestion(q)}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container component="main" maxWidth="lg">
        <Typography component="h1" variant="h4" align="center">
          {quiz.title}
        </Typography>
        <Grid className={classes.questionsBlock}>{renderQuestions()}</Grid>
      </Container>

      <Grid container justify="center">
        <Button type="submit" variant="contained" color="primary">
          Подтвердить
        </Button>
      </Grid>
    </form>
  );
};

export default reduxForm({
  form: FormNames.AnswerQuizForm.name,
  enableReinitialize: true,
})(AnswerQuizForm as any) as any;
