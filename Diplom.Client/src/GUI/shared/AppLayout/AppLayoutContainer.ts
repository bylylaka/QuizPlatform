import { connect } from "react-redux";
import { IAppLayoutProps, IAppLayoutCallProps } from "./props";
import { RootState } from "../../../logic/reducers/rootReducer";
import AppLayout from "./AppLayout";
import Actions from "../../../logic/actions/actions";
import { Dispatch } from "redux";
import Selectors from "../../../logic/selectors/selectors";

const mapStateToProps = (state: RootState): IAppLayoutProps => {
  return {
    profileId:
      state.reducer.myProfileSimplified && state.reducer.myProfileSimplified.id,
    title: state.reducer.title,
    activeHeaderComponents: Selectors.activeHeaderComponents(state),
    notifications: Selectors.siteNotifications(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IAppLayoutCallProps => {
  return {
    loadMyProfileSimplified: () => dispatch(Actions.getMyProfileSimplified()),
    logout: () => dispatch(Actions.logout()),
  };
};

const AppLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout) as React.ComponentType;

export default AppLayoutContainer;
