import QuestionType from "./QuestionType";
import Option from "./Option";

class Question {
  title?: string;
  type?: QuestionType;
  options?: Option[];
}

export default Question;
