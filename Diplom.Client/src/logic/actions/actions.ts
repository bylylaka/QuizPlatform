import ActionTypes from "../actionTypes/actionTypes";
import { AppSnackbarMessage } from "../../GUI/shared/AppSnackbar/props";

const Actions = {
  //store actions
  setAppSnackbarMessage(message: AppSnackbarMessage) {
    return {
      type: ActionTypes.SET_APPSNACKBAR_MESSAGE,
      message
    };
  }

  //saga actions
  //   getOrganisationStructure() {
  //     return {
  //       type: ActionTypes.GET_ORGANISATION_STRUCTURE
  //     };
  //   }
};

export default Actions;
