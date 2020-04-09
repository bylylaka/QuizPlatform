import React, { FunctionComponent, useEffect, useState } from "react";
import { IQuizResultsPageProps, IQuizResultsPageCallProps } from "./props";
import createStyles from "./styles";
import QuizResultsForm from "./QuizResultsForm/QuizResultsForm";

export const QuizResultsPage: FunctionComponent<
  IQuizResultsPageProps & IQuizResultsPageCallProps
> = (props) => {
  const { setTitle, formValues, submitQuiz } = props;

  const classes = createStyles();

  useEffect(() => {
    setTitle("Создание опроса");
  }, []);

  return <QuizResultsForm formValues={formValues} onSubmit={submitQuiz} />;
};

export default QuizResultsPage;
