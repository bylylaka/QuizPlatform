import ActionTypes from "../actionTypes/actionTypes";
import { AppSnackbarMessage } from "../../GUI/shared/AppSnackbar/props";
import { AnyAction } from "redux";
import User from "../../shared/models/user/User";
import ProfileSimplifiedViewModel from "../../shared/models/profile/ProfileSimplifiedViewModel";
import UserSimplifiedViewModel from "../../shared/models/user/UserSimplifiedViewModel";
import Quiz from "../../shared/models/quiz/Quiz";

export interface State {
  title: string;
  appSnackbarMessage: AppSnackbarMessage;
  authorized: boolean | undefined;
  myProfileSimplified?: ProfileSimplifiedViewModel;
  user?: User;
  searchUsers: UserSimplifiedViewModel[];
  quiz?: Quiz;
  userQuizList: Quiz[];
}

const initialState: State = {
  title: "",
  appSnackbarMessage: {} as AppSnackbarMessage,
  authorized: undefined,
  searchUsers: [],
  userQuizList: [],
};

export const Reducer = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case ActionTypes.SET_TITLE:
      return {
        ...state,
        title: action.title,
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
    default:
      return state;
  }
};

export default Reducer;
