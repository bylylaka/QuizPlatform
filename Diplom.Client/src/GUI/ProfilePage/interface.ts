import User from "../../shared/models/user/User";

export interface IProfilePageProps {
  profile?: User;
}

export interface IProfilePageCallProps {
  logout: () => void;
  getProfile: () => void;
  setTitle: (title: string) => void;
}
