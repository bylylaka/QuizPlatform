import User from "../../shared/models/user/User";

export interface IUserPageProps {
  user?: User;
  isMyProfile: boolean;
}

export interface IUserPageCallProps {
  getUser: (id: number) => void;
  setTitle: (title: string) => void;
}
