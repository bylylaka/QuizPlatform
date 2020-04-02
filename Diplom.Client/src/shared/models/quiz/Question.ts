import QuestionType from "./QuestionType";

class Question {
  constructor() {}
  title?: string;
  type?: QuestionType;
  options?: string[];
}

export default Question;
