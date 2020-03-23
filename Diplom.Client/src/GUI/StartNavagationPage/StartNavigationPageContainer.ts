import { connect } from "react-redux";
import { Dispatch } from "redux";
import Actions from "../../logic/actions/actions";
import {
  IStartNavigationPageProps,
  IStartNavigationPageCallProps
} from "./props";
import StartNavigationPage from "./StartNavigationPage";
import { RootState } from "../../logic/reducers/rootReducer";

const mapStateToProps = (state: RootState): IStartNavigationPageProps => {
  return {
    isAuthorized: state.reducer.authorized
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IStartNavigationPageCallProps => {
  return {
    checkAuthorized: () => dispatch(Actions.checkAuthorized())
  };
};

const StartNavigationPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StartNavigationPage) as React.ComponentType;

export default StartNavigationPageContainer;
