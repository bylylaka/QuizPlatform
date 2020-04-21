import { connect } from "react-redux";
import {
  IActivationFieldProps,
  IActivationFieldCallProps,
} from "./props";
import { Dispatch } from "redux";
import ActivationField from "./ActivationField";
import { RootState } from "../../../../../logic/reducers/rootReducer";
import { formValueSelector, unregisterField, change } from "redux-form";

type ContainerProps = Pick<IActivationFieldProps & IActivationFieldCallProps, "formName">

const mapStateToProps = (state: RootState, ownProps: ContainerProps): Omit<IActivationFieldProps, keyof ContainerProps> => {
  return {
    getFieldValue: (fieldName: string) => formValueSelector(ownProps.formName)(state, fieldName)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: ContainerProps
): Omit<IActivationFieldCallProps, keyof ContainerProps> => {
  return {
      unregisterField: (fieldName: string) => dispatch(unregisterField(ownProps.formName, fieldName)),
      change: (fieldName: string, value: any) => dispatch(change(ownProps.formName, fieldName, value)),
  };
};

const ActivationFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivationField) as React.ComponentType<ContainerProps>;

export default ActivationFieldContainer;
