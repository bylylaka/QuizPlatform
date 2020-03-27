import User from "../../../shared/models/user/User";
import { InjectedFormProps } from "redux-form";

export interface IProfileInfoFormProps extends InjectedFormProps {
  avatar: File | string;
  country: number;
}

export interface IProfileInfoFormCallProps {
  onSubmit: (profile: User) => void;
}
