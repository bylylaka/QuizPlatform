import Axios from "axios";
import User from "../../shared/models/user/User";
import Quiz from "../../shared/models/quiz/Quiz";
import Answer from "../../shared/models/quiz/Answer";

export const Apis = {
  login(values: FormData) {
    return Axios.post(`api/authorization/login`, values);
  },
  register(values: FormData) {
    return Axios.post(`api/authorization/register`, values);
  },
  logout() {
    return Axios.post(`api/authorization/logout`);
  },
  IsAuthorized() {
    return Axios.get(`api/authorization/isAuthorized`);
  },
  getMyProfileSimplified() {
    return Axios.get(`api/account/getMyProfileSimplified`);
  },
  getUser(id: number) {
    return Axios.get(`api/account/getUser/${id}`);
  },
  updateProfile(profile: User) {
    return Axios.put(`api/account/updateProfile`, profile);
  },
  searchUsers(string: string) {
    return Axios.get(`api/account/searchByWord/${string}`);
  },
  searchQuizes(string: string) {
    return Axios.get(`api/quiz/searchByWord/${string}`);
  },
  getQuiz(id: number) {
    return Axios.get(`api/quiz/getQuiz/${id}`);
  },
  createQuiz(quiz: Quiz) {
    return Axios.post(`api/quiz/createQuiz`, quiz);
  },
  answerQuiz(answers: Answer[]) {
    return Axios.post(`api/quiz/answerQuiz`, answers);
  },
  getUserQuizList(userId: number) {
    return Axios.get(`api/quiz/getUserQuizList/${userId}`);
  },
  loadQuizStatistic(quizId: number) {
    return Axios.get(`api/quiz/statistic/${quizId}`);
  },
  getSubsctiptionStatus(producerId: number) {
    return Axios.get(`api/notification/getSubscriptionStatus/${producerId}`);
  },
  changeSubscriptionStatus(producerId: number, status: boolean) {
    return Axios.put(`api/notification/chagneSubsciptionStatus`, {
      producerId: producerId,
      subscribe: status,
    });
  },
};

export default Apis;
