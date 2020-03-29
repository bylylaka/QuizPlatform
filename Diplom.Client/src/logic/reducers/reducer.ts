import ActionTypes from "../actionTypes/actionTypes";
import { AppSnackbarMessage } from "../../GUI/shared/AppSnackbar/props";
import { AnyAction } from "redux";
import User from "../../shared/models/user/User";
import ProfileSimplifiedViewModel from "../../shared/models/profile/ProfileSimplifiedViewModel";

export interface State {
  title: string;
  appSnackbarMessage: AppSnackbarMessage;
  authorized: boolean | undefined;
  myProfileSimplified?: ProfileSimplifiedViewModel;
  user?: User;
}

const initialState: State = {
  title: "",
  appSnackbarMessage: {} as AppSnackbarMessage,
  authorized: undefined
};

export const Reducer = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case ActionTypes.SET_TITLE:
      return {
        ...state,
        title: action.title
      };
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
    case ActionTypes.SET_MY_PROFILE_SIMPLIFIED: {
      return {
        ...state,
        myProfileSimplified: action.profile
      };
    }
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default Reducer;
