import { IUserPageProps, IUserPageCallProps } from "./interface";
import { RootState } from "../../logic/reducers/rootReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import UserPage from "./UserPage";
import Actions from "../../logic/actions/actions";
import Selectors from "../../logic/selectors/selectors";

const mapStateToProps = (state: RootState): IUserPageProps => {
  return {
    user: state.reducer.user,
    isMyProfile:
      (state.reducer.user && state.reducer.user.id) ===
      (state.reducer.myProfileSimplified &&
        state.reducer.myProfileSimplified.id),
    subscriptionStatus: Selectors.subscriptionStatus(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IUserPageCallProps => {
  return {
    getUser: (id: number) => dispatch(Actions.getUser(id)),
    setTitle: (title: string) => dispatch(Actions.setTitle(title)),
    checkSubscriptionStatus: (producerId: number) =>
      dispatch(Actions.getSubscriptionStatus(producerId)),
    chagneSubscriptionStatus: (producerId: number, status: boolean) =>
      dispatch(Actions.changeSubscriptionStatus(producerId, status)),
  };
};

const UserPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);

export default UserPageContainer;
