import { IUserQuizListProps, IUserQuizListCallProps } from "./props";
import { RootState } from "../../../logic/reducers/rootReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import UserQuizList from "./UserQuizList";
import Actions from "../../../logic/actions/actions";

export type ContainerProps = Pick<
  IUserQuizListProps & IUserQuizListCallProps,
  "user"
>;
export type test = Omit<IUserQuizListProps, keyof IUserQuizListProps>;

const mapStateToProps = (
  state: RootState
): Omit<IUserQuizListProps, keyof IUserQuizListProps> => {
  return {
    quizes: state.reducer.userQuizList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IUserQuizListCallProps => {
  return {
    loadUserQuizList: (userId: number) =>
      dispatch(Actions.loadUserQuizList(userId)),
  };
};

const UserQuizListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserQuizList);

export default UserQuizListContainer as React.ComponentType<ContainerProps>;
