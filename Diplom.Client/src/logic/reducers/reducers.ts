import ActionTypes from "../actionTypes/actionTypes";
import { AppSnackbarMessage } from "../../GUI/shared/AppSnackbar/props";
import { AnyAction } from "redux";

export interface State {
  appSnackbarMessage: AppSnackbarMessage;
}

const initialState: State = {
  appSnackbarMessage: {} as AppSnackbarMessage
};

export const Reducers = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case ActionTypes.SET_APPSNACKBAR_MESSAGE:
      return {
        ...state,
        appSnackbarMessage: action.message
      };
    default:
      return state;
  }
};

export default Reducers;
