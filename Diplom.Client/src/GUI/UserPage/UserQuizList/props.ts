import Quiz from "../../../shared/models/quiz/Quiz";
import User from "../../../shared/models/user/User";

export interface IUserQuizListProps {
  user?: User;
  quizes: Quiz[];
}

export interface IUserQuizListCallProps {
  loadUserQuizList: (userId: number) => void;
}
