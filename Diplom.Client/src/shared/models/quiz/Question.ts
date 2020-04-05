import QuestionType from "./QuestionType";
import Option from "./Option";

class Question {
  id?: number;
  title?: string;
  type?: QuestionType;
  options?: Option[];
}

export default Question;
