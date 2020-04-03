import ActionTypes from "../actionTypes/actionTypes";
import { AppSnackbarMessage } from "../../GUI/shared/AppSnackbar/props";
import User from "../../shared/models/user/User";
import ProfileSimplifiedViewModel from "../../shared/models/profile/ProfileSimplifiedViewModel";
import UserSimplifiedViewModel from "../../shared/models/user/UserSimplifiedViewModel";
import Quiz from "../../shared/models/quiz/Quiz";

const Actions = {
  //store actions
  setTitle(title: string) {
    return {
      type: ActionTypes.SET_TITLE,
      title
    };
  },
  setAppSnackbarMessage(message: AppSnackbarMessage) {
    return {
      type: ActionTypes.SET_APPSNACKBAR_MESSAGE,
      message
    };
  },

  setAuthorized(authorized: boolean) {
    return {
      type: ActionTypes.SET_AUTHORIZED,
      authorized
    };
  },

  setMyProfileSimplified(profile: ProfileSimplifiedViewModel) {
    return {
      type: ActionTypes.SET_MY_PROFILE_SIMPLIFIED,
      profile
    };
  },

  setUser(user: User) {
    return {
      type: ActionTypes.SET_USER,
      user
    };
  },

  setSearchUsers(users: UserSimplifiedViewModel[]) {
    return {
      type: ActionTypes.SET_SEARCH_USERS,
      users
    };
  },

  //saga actions
  login(values: FormData) {
    return {
      type: ActionTypes.LOGIN,
      values
    };
  },

  register(values: FormData) {
    return {
      type: ActionTypes.REGISTER,
      values
    };
  },

  logout() {
    return {
      type: ActionTypes.LOGOUT
    };
  },

  getMyProfileSimplified() {
    return {
      type: ActionTypes.GET_MY_PROFILE_SIMPLIFIED
    };
  },

  getUser(id: number) {
    return {
      type: ActionTypes.GET_USER,
      id
    };
  },

  checkAuthorized() {
    return {
      type: ActionTypes.CHECK_AUTHORIZED
    };
  },

  updateProfile(profile: User) {
    return {
      type: ActionTypes.UPDATE_PROFILE,
      profile
    };
  },

  search(string: string) {
    return {
      type: ActionTypes.SEARCH,
      string
    };
  },

  createQuiz(quiz: Quiz) {
    return {
      type: ActionTypes.CREATE_QUIZ,
      quiz
    };
  }
};

export default Actions;
