import { IProfileInfoFormProps, IProfileInfoFormCallProps } from "./props";
import { RootState } from "../../../logic/reducers/rootReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Actions from "../../../logic/actions/actions";
import ProfileInfoForm from "./ProfileInfoForm";
import User from "../../../shared/models/user/User";
import { formValueSelector } from "redux-form";
import FormNames from "../../shared/Form/FormNames";

type ContainerProps = Pick<IProfileInfoFormProps, "initialValues" | "avatar">;

const selector = formValueSelector(FormNames.ProfileInfoForm.name);

const mapStateToProps = (state: RootState): ContainerProps => {
  return {
    avatar: selector(state, FormNames.ProfileInfoForm.fieldNames.avatar),
    initialValues: state.reducer.profile as any
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IProfileInfoFormCallProps => {
  return {
    onSubmit: (profile: User) => dispatch(Actions.updateProfile(profile))
  };
};

const ProfileInfoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileInfoForm);

export default ProfileInfoFormContainer;
