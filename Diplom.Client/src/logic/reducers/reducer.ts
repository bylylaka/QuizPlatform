import ActionTypes from "../actionTypes/actionTypes";
import { AppSnackbarMessage } from "../../GUI/shared/AppSnackbar/props";
import { AnyAction } from "redux";
import User from "../../shared/models/user/User";
import ProfileSimplifiedViewModel from "../../shared/models/profile/ProfileSimplifiedViewModel";
import UserSimplified from "../../shared/models/user/UserSimplified";
import Quiz from "../../shared/models/quiz/Quiz";
import QuizSearch from "../../shared/models/quiz/QuizSearch";
import StatisticQuiz from "../../shared/models/quiz/StatisticQuiz";
import SiteNotification from "../../shared/models/notification/SiteNotification";

export interface State {
  title: string;
  activeHeaderComponents: JSX.Element[];
  appSnackbarMessage: AppSnackbarMessage;
  authorized: boolean | undefined;
  myProfileSimplified?: ProfileSimplifiedViewModel;
  user?: User;
  searchUsers: UserSimplified[];
  searchQuizes: QuizSearch[];
  quiz?: Quiz;
  userQuizList: Quiz[];
  quizStatistic: StatisticQuiz;
  quizFilteredStatistic: StatisticQuiz;
  subscriptionStatus: boolean;
  siteNotifications: SiteNotification[];
}

const initialState: State = {
  title: "",
  activeHeaderComponents: [],
  appSnackbarMessage: {} as AppSnackbarMessage,
  authorized: undefined,
  searchUsers: [],
  searchQuizes: [],
  userQuizList: [],
  quizStatistic: {} as any,
  quizFilteredStatistic: {} as any,
  subscriptionStatus: false,
  siteNotifications: [],
};

export const Reducer = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case ActionTypes.SET_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case ActionTypes.SET_ACTIVE_HEADER_COMPONENTS:
      return {
        ...state,
        activeHeaderComponents: action.components,
      };
    case ActionTypes.SET_APPSNACKBAR_MESSAGE:
      return {
        ...state,
        appSnackbarMessage: action.message,
      };
    case ActionTypes.SET_AUTHORIZED:
      return {
        ...state,
        authorized: action.authorized,
      };
    case ActionTypes.SET_MY_PROFILE_SIMPLIFIED: {
      return {
        ...state,
        myProfileSimplified: action.profile,
      };
    }
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case ActionTypes.SET_SEARCH_USERS:
      return {
        ...state,
        searchUsers: action.users,
      };
    case ActionTypes.SET_SEARCH_QUIZES:
      return {
        ...state,
        searchQuizes: action.searchQuizes,
      };
    case ActionTypes.SET_QUIZ:
      return {
        ...state,
        quiz: action.quiz,
      };
    case ActionTypes.SET_USER_QUIZ_LIST:
      return {
        ...state,
        userQuizList: action.quizList,
      };
    case ActionTypes.SET_QUIZ_STATISTIC:
      return {
        ...state,
        quizStatistic: action.statistic,
      };
    case ActionTypes.SET_QUIZ_FILTERED_STATISTIC:
      return {
        ...state,
        quizFilteredStatistic: action.statistic,
      };
    case ActionTypes.SET_SUBSCRIPTION_STATUS:
      return {
        ...state,
        subscriptionStatus: action.status,
      };
    case ActionTypes.SET_SITE_NOTIFICATIONS:
      return {
        ...state,
        siteNotifications: action.notifications,
      };
    default:
      return state;
  }
};

export default Reducer;
