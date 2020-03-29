import React, { FunctionComponent, useEffect, useState } from "react";
import { ICreateQuizPageProps, ICreateQuizPageCallProps } from "./props";
import createStyles from "./styles";
import CreateQuizForm from "./CreateQuizForm/CreateQuizForm";

export const CreateQuizPage: FunctionComponent<ICreateQuizPageProps &
  ICreateQuizPageCallProps> = props => {
  const { setTitle, formValues } = props;

  const classes = createStyles();

  useEffect(() => {
    setTitle("Создание опроса");
  }, []);

  return <CreateQuizForm formValues={formValues} />;
};

export default CreateQuizPage;
