import Quiz from "../../shared/models/quiz/Quiz";

export interface ICreateQuizPageProps {
  formValues: any;
}

export interface ICreateQuizPageCallProps {
  setTitle: (title: string) => void;
  submitQuiz: (quiz: Quiz) => void;
}
