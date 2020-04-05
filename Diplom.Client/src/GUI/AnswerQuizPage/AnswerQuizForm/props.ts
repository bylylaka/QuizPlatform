import { InjectedFormProps } from "redux-form";
import Quiz from "../../../shared/models/quiz/Quiz";

export interface IAnswerQuizFormProps extends InjectedFormProps {
  quiz: Quiz;
}

export interface IAnswerQuizFormCallProps {}
