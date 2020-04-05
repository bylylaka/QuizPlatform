import Quiz from "../../shared/models/quiz/Quiz";
import Answer from "../../shared/models/quiz/Answer";

export interface IAnswerQuizPageProps {
  quiz?: Quiz;
}

export interface IAnswerQuizPageCallProps {
  setTitle: (title: string) => void;
  loadQuiz: (id: number) => void;
  submitAnswers: (answers: Answer[]) => void;
}
