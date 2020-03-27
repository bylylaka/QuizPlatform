import User from "../../../shared/models/user/User";
import { InjectedFormProps } from "redux-form";

export interface IProfileInfoFormProps extends InjectedFormProps {
  avatar: File | string;
}

export interface IProfileInfoFormCallProps {
  onSubmit: (profile: User) => void;
}
