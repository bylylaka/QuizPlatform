import { connect } from "react-redux";
import { IAppSnackbarProps } from "./props";
import AppSnackbar from "./AppSnackbar";
import { RootState } from "../../../logic/reducers/rootReducer";

const mapStateToProps = (state: RootState): IAppSnackbarProps => {
  return {
    message: state.reducer.appSnackbarMessage
  };
};

const AppSnackbarContainer = connect(mapStateToProps)(
  AppSnackbar
) as React.ComponentType;

export default AppSnackbarContainer;
