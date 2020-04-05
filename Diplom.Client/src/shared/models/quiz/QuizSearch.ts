import UserSimplified from "../user/UserSimplified";

class QuizSearch {
  constructor(quizId: number, title: string, user: UserSimplified) {
    this.quizId = quizId;
    this.title = title;
    this.user = user;
  }
  quizId: number;
  title: string;
  user: UserSimplified;
}

export default QuizSearch;
