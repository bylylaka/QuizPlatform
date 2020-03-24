import ActionTypes from "../actionTypes/actionTypes";
import { AppSnackbarMessage } from "../../GUI/shared/AppSnackbar/props";
import { AnyAction } from "redux";
import User from "../../shared/models/user/User";

export interface State {
  appSnackbarMessage: AppSnackbarMessage;
  authorized: boolean | undefined;
  profile?: User;
}

const initialState: State = {
  appSnackbarMessage: {} as AppSnackbarMessage,
  authorized: undefined
};

export const Reducer = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case ActionTypes.SET_APPSNACKBAR_MESSAGE:
      return {
        ...state,
        appSnackbarMessage: action.message
      };
    case ActionTypes.SET_AUTHORIZED:
      return {
        ...state,
        authorized: action.authorized
      };
    case ActionTypes.SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};

export default Reducer;
