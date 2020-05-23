import { IUserInfoFormProps, IUserInfoFormCallProps } from "./props";
import { RootState } from "../../../logic/reducers/rootReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Actions from "../../../logic/actions/actions";
import ProfileInfoForm from "./UserInfoForm";
import User from "../../../shared/models/user/User";
import { formValueSelector } from "redux-form";
import FormNames from "../../shared/Form/FormNames";

type ContainerProps = Pick<
  IUserInfoFormProps,
  "initialValues" | "avatar" | "country" | "canEdit"
>;

const selector = formValueSelector(FormNames.ProfileInfoForm.name);

const mapStateToProps = (state: RootState): ContainerProps => {
  return {
    avatar: selector(state, FormNames.ProfileInfoForm.fieldNames.avatar),
    country: selector(state, FormNames.ProfileInfoForm.fieldNames.country),
    initialValues: state.reducer.user as any,
    canEdit: Boolean(
      (state.reducer.myProfileSimplified &&
        state.reducer.myProfileSimplified.id) ==
        (state.reducer.user && state.reducer.user.id)
    ),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IUserInfoFormCallProps => {
  return {
    onSubmit: (profile: User) => dispatch(Actions.updateProfile(profile)),
  };
};

const UserInfoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileInfoForm);

export default UserInfoFormContainer;
