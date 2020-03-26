import { IProfilePageProps, IProfilePageCallProps } from "./interface";
import { RootState } from "../../logic/reducers/rootReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import ProfilePage from "./ProfilePage";
import Actions from "../../logic/actions/actions";

const mapStateToProps = (state: RootState): IProfilePageProps => {
  return {
    profile: state.reducer.profile
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IProfilePageCallProps => {
  return {
    getProfile: () => dispatch(Actions.getProfile()),
    logout: () => dispatch(Actions.logout()),
    updateProfile: profile => dispatch(Actions.updateProfile(profile))
  };
};

const ProfilePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);

export default ProfilePageContainer;
