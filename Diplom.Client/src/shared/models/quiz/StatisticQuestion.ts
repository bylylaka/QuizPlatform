import StatisticAnswer from "./StatisticAnswer";
import QuestionType from "./QuestionType";

class StatisticQuestion {
  constructor(title: string, type: QuestionType, answers: StatisticAnswer) {
    this.title = title;
    this.type = type;
    this.answers = answers;
  }

  title: string;
  type: QuestionType;
  answers: StatisticAnswer;
}

export default StatisticQuestion;
