import User from "../../shared/models/user/User";

export interface IUserPageProps {
  user?: User;
}

export interface IUserPageCallProps {
  getUser: (id: number) => void;
  setTitle: (title: string) => void;
}
