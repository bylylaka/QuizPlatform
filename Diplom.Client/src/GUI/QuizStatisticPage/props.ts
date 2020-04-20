import StatisticQuiz from "../../shared/models/quiz/StatisticQuiz";

export interface IQuizStatisticsPageProps {
  statistic: StatisticQuiz;
}

export interface IQuizStatisticsPageCallProps {
  setTitle: (title: string) => void;
  loadStatistic: (quizId: number) => void;
  setActiveHeaderComponents: (components: JSX.Element[]) => void;
}
