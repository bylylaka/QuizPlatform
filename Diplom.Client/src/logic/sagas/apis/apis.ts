import Axios from "axios";
import User from "../../../shared/models/user/User";
import Quiz from "../../../shared/models/quiz/Quiz";
import Answer from "../../../shared/models/quiz/Answer";

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
  getQuiz(id: number) {
    return Axios.get(`api/quiz/getQuiz/${id}`);
  },
  createQuiz(quiz: Quiz) {
    return Axios.post(`api/quiz/createQuiz`, quiz);
  },
  answerQuiz(answers: Answer[]) {
    return Axios.post(`api/quiz/answer`, answers);
  }
};

export default Apis;
