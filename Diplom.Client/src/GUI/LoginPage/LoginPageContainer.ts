import { connect } from "react-redux";
import { ILoginPageProps, ILoginPageCallProps } from "./props";
import { Dispatch } from "redux";
import LoginPage from "./LoginPage";
import Actions from "../../logic/actions/actions";
import { RootState } from "../../logic/reducers/rootReducer";

const mapStateToProps = (state: RootState): ILoginPageProps => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch): ILoginPageCallProps => {
  return {
    login: (values: FormData) => dispatch(Actions.login(values))
  };
};

const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage) as React.ComponentType;

export default LoginPageContainer;
