import ActionTypes from "../actionTypes/actionTypes";
import { AppSnackbarMessage } from "../../GUI/shared/AppSnackbar/props";

const Actions = {
  //store actions
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

  checkAuthorized() {
    return {
      type: ActionTypes.CHECK_AUTHORIZED
    };
  }
};

export default Actions;
