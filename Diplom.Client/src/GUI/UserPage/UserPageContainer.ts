import { IUserPageProps, IUserPageCallProps } from "./interface";
import { RootState } from "../../logic/reducers/rootReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import UserPage from "./UserPage";
import Actions from "../../logic/actions/actions";

const mapStateToProps = (state: RootState): IUserPageProps => {
  return {
    user: state.reducer.user
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IUserPageCallProps => {
  return {
    getUser: (id: number) => dispatch(Actions.getUser(id)),
    setTitle: title => dispatch(Actions.setTitle(title))
  };
};

const UserPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);

export default UserPageContainer;
