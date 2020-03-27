import ActionTypes from "../actionTypes/actionTypes";
import { AppSnackbarMessage } from "../../GUI/shared/AppSnackbar/props";
import User from "../../shared/models/user/User";

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

  setProfile(profile: User) {
    return {
      type: ActionTypes.SET_PROFILE,
      profile
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

  getProfile() {
    return {
      type: ActionTypes.GET_PROFILE
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
  }
};

export default Actions;
