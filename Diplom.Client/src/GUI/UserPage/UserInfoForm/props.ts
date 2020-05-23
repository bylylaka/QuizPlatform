import User from "../../../shared/models/user/User";
import { InjectedFormProps } from "redux-form";

export interface IUserInfoFormProps extends InjectedFormProps {
  isMyProfile: boolean;
  avatar: File | string;
  country: number;
  canEdit: boolean;
}

export interface IUserInfoFormCallProps {
  onSubmit: (profile: User) => void;
}
