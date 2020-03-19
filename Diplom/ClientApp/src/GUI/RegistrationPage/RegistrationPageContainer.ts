import { connect } from "react-redux";
import { State } from "../../logic/reducers/reducer";
import { IRegistrationPageProps, IRegistrationPageCallProps } from "./props";
import { Dispatch } from "redux";
import Actions from "../../logic/actions/actions";
import RegistrationPage from "./RegistrarionPage";

const mapStateToProps = (state: State): IRegistrationPageProps => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch): IRegistrationPageCallProps => {
  return {
    register: (values: FormData) => dispatch(Actions.register(values))
  };
};

const RegistrationPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPage) as React.ComponentType;

export default RegistrationPageContainer;
