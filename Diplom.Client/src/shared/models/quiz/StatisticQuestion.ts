import StatisticAnswer from "./StatisticAnswer";
import QuestionType from "./QuestionType";
import Option from "./Option";

class StatisticQuestion {
  constructor(title: string, type: QuestionType, answers: StatisticAnswer[], options: Option[] = []) {
    this.title = title;
    this.type = type;
    this.answers = answers;
    this.options = options;
  }

  title: string;
  type: QuestionType;
  answers: StatisticAnswer[];
  options?: Option[];
}

export default StatisticQuestion;
