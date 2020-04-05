import Quiz from "../../../shared/models/quiz/Quiz";
import User from "../../../shared/models/user/User";

export interface IQuizListItemProps {
  quiz: Quiz;
  user: User;
}

export interface IQuizListItemCallProps {}
