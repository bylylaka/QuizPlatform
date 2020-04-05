import React, { FunctionComponent, useEffect, useState } from "react";
import { IAnswerQuizPageProps, IAnswerQuizPageCallProps } from "./props";
import { useParams } from "react-router";
import AnswerQuizForm from "./AnswerQuizForm/AnswerQuizForm";
import Answer from "../../shared/models/quiz/Answer";
import Quiz from "../../shared/models/quiz/Quiz";

export const AnswerQuizPage: FunctionComponent<
  IAnswerQuizPageProps & IAnswerQuizPageCallProps
> = (props) => {
  const { setTitle, loadQuiz, quiz, submitAnswers } = props;

  const { id } = useParams();

  useEffect(() => {
    setTitle("Ответ на опрос");
  }, []);

  useEffect(() => {
    if (id) {
      loadQuiz(Number(id));
    }
  }, [id]);

  const submitHandler = (values: any[]) => {
    let answers: Answer[] = Object.keys(values).map(
      (key) =>
        new Answer((quiz as Quiz).id as number, Number(key), values[key as any])
    );
    submitAnswers(answers);
  };

  if (!quiz) {
    return <p>Loading...</p>;
  }

  return <AnswerQuizForm onSubmit={submitHandler} quiz={quiz} />;
};

export default AnswerQuizPage;
