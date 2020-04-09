import StatisticQuestion from "./StatisticQuestion";

class StatisticQuiz {
  constructor(title: string, questions: StatisticQuestion[]) {
    this.title = title;
    this.questions = questions;
  }

  title: string;
  questions: StatisticQuestion[];
}

export default StatisticQuiz;
