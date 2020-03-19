import { connect } from "react-redux";
import { State } from "../../logic/reducers/reducer";
import { ILoginPageProps, ILoginPageCallProps } from "./props";
import { Dispatch } from "redux";
import LoginPage from "./LoginPage";
import Actions from "../../logic/actions/actions";

const mapStateToProps = (state: State): ILoginPageProps => {
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
