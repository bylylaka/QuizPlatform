import { connect } from "react-redux";
import { State } from "../../logic/reducers/reducers";
import { ILoginPageProps, ILoginPageCallProps } from "./props";
import { Dispatch } from "redux";
import LoginPage from "./LoginPage";

const mapStateToProps = (state: State): ILoginPageProps => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch): ILoginPageCallProps => {
  return {};
};

const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage) as React.ComponentType;

export default LoginPageContainer;
