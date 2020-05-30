import ActionTypes from "../actionTypes/actionTypes";
import { AppSnackbarMessage } from "../../GUI/shared/AppSnackbar/props";
import User from "../../shared/models/user/User";
import ProfileSimplifiedViewModel from "../../shared/models/profile/ProfileSimplifiedViewModel";
import UserSimplified from "../../shared/models/user/UserSimplified";
import Quiz from "../../shared/models/quiz/Quiz";
import Answer from "../../shared/models/quiz/Answer";
import QuizSearch from "../../shared/models/quiz/QuizSearch";
import StatisticQuiz from "../../shared/models/quiz/StatisticQuiz";
import StatisticFilter from "../../shared/models/quiz/Filter/StatisticFilter";
import SiteNotification from "../../shared/models/notification/SiteNotification";

const Actions = {
  //store actions
  setTitle(title: string) {
    return {
      type: ActionTypes.SET_TITLE,
      title,
    };
  },
  setActiveHederComponents(components: JSX.Element[]) {
    return {
      type: ActionTypes.SET_ACTIVE_HEADER_COMPONENTS,
      components,
    };
  },
  setAppSnackbarMessage(message: AppSnackbarMessage) {
    return {
      type: ActionTypes.SET_APPSNACKBAR_MESSAGE,
      message,
    };
  },

  setAuthorized(authorized: boolean) {
    return {
      type: ActionTypes.SET_AUTHORIZED,
      authorized,
    };
  },

  setMyProfileSimplified(profile: ProfileSimplifiedViewModel) {
    return {
      type: ActionTypes.SET_MY_PROFILE_SIMPLIFIED,
      profile,
    };
  },

  setUser(user: User) {
    return {
      type: ActionTypes.SET_USER,
      user,
    };
  },

  setSearchUsers(users: UserSimplified[]) {
    return {
      type: ActionTypes.SET_SEARCH_USERS,
      users,
    };
  },

  setSearchQuizes(searchQuizes: QuizSearch[]) {
    return {
      type: ActionTypes.SET_SEARCH_QUIZES,
      searchQuizes,
    };
  },

  setQuiz(quiz: Quiz) {
    return {
      type: ActionTypes.SET_QUIZ,
      quiz,
    };
  },

  setUserQuizList(quizList: Quiz[]) {
    return {
      type: ActionTypes.SET_USER_QUIZ_LIST,
      quizList,
    };
  },

  setQuizStatistic(statistic: StatisticQuiz) {
    return {
      type: ActionTypes.SET_QUIZ_STATISTIC,
      statistic,
    };
  },

  setQuizFilteredStatistic(statistic: StatisticQuiz) {
    return {
      type: ActionTypes.SET_QUIZ_FILTERED_STATISTIC,
      statistic,
    };
  },

  setSubscriptionStatus(status: boolean) {
    return {
      type: ActionTypes.SET_SUBSCRIPTION_STATUS,
      status,
    };
  },

  setSiteNotifications(notifications: SiteNotification[]) {
    return {
      type: ActionTypes.SET_SITE_NOTIFICATIONS,
      notifications,
    };
  },

  //saga actions
  login(values: FormData) {
    return {
      type: ActionTypes.LOGIN,
      values,
    };
  },

  register(values: FormData) {
    return {
      type: ActionTypes.REGISTER,
      values,
    };
  },

  logout() {
    return {
      type: ActionTypes.LOGOUT,
    };
  },

  getMyProfileSimplified() {
    return {
      type: ActionTypes.GET_MY_PROFILE_SIMPLIFIED,
    };
  },

  getUser(id: number) {
    return {
      type: ActionTypes.GET_USER,
      id,
    };
  },

  checkAuthorized() {
    return {
      type: ActionTypes.CHECK_AUTHORIZED,
    };
  },

  updateProfile(profile: User) {
    return {
      type: ActionTypes.UPDATE_PROFILE,
      profile,
    };
  },

  search(string: string) {
    return {
      type: ActionTypes.SEARCH,
      string,
    };
  },

  getQuiz(id: number) {
    return {
      type: ActionTypes.GET_QUIZ,
      id,
    };
  },

  createQuiz(quiz: Quiz) {
    return {
      type: ActionTypes.CREATE_QUIZ,
      quiz,
    };
  },

  answerQuiz(answers: Answer[]) {
    return {
      type: ActionTypes.ANSWER_QUIZ,
      answers,
    };
  },

  loadUserQuizList(userId: number) {
    return {
      type: ActionTypes.LOAD_USER_QUIZ_LIST,
      userId,
    };
  },

  loadQuizStatistic(quizId: number) {
    return {
      type: ActionTypes.LOAD_QUIZ_STATISTIC,
      quizId,
    };
  },

  filterQuizStatistic(filter: StatisticFilter) {
    return {
      type: ActionTypes.FILTER_QUIZ_STATISTIC,
      filter,
    };
  },

  getSubscriptionStatus(producerId: number) {
    return {
      type: ActionTypes.GET_SUBSCRIPTION_STATUS,
      producerId,
    };
  },

  changeSubscriptionStatus(producerId: number, status: boolean) {
    return {
      type: ActionTypes.CHANGE_SUBSCRIPTION_STATUS,
      producerId,
      status,
    };
  },

  loadSiteNotifications() {
    return {
      type: ActionTypes.LOAD_SITE_NOTIFICATOINS,
    };
  },

  updateNotificationsOpenedStatus(ids: number[]) {
    return {
      type: ActionTypes.UPDATE_NOTIFICATIONS_OPENED_STATUS,
      ids,
    };
  },
};

export default Actions;
