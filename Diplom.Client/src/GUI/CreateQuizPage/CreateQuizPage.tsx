import React, { FunctionComponent, useEffect, useState } from "react";
import { ICreateQuizPageProps, ICreateQuizPageCallProps } from "./props";
import createStyles from "./styles";
import CreateQuizForm from "./CreateQuizForm/CreateQuizForm";

export const CreateQuizPage: FunctionComponent<ICreateQuizPageProps &
  ICreateQuizPageCallProps> = props => {
  const { setTitle, formValues, submitQuiz } = props;

  const classes = createStyles();

  useEffect(() => {
    setTitle("Quiz creation");
  }, []);

  return <CreateQuizForm formValues={formValues} onSubmit={submitQuiz} />;
};

export default CreateQuizPage;
