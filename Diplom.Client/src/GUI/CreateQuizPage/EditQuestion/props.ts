import Question from "../../../shared/models/quiz/Question";

export interface IEditQuestionProps {
  fieldPrefix: string;
  question?: Question;
  fields?: any;
  index: number;
}

export interface IEditQuestionCallProps {}
