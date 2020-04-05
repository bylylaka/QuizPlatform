import UserSimplified from "../../../shared/models/user/UserSimplified";
import QuizSearch from "../../../shared/models/quiz/QuizSearch";

export interface ISearchListProps {
  users: UserSimplified[];
  quizes: QuizSearch[];
}

export interface ISearchListCallProps {}
