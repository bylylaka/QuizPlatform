import User from "../../shared/models/user/User";

export interface IUserPageProps {
  user?: User;
  isMyProfile: boolean;
  subscriptionStatus: boolean;
}

export interface IUserPageCallProps {
  getUser: (id: number) => void;
  setTitle: (title: string) => void;
  chagneSubscriptionStatus: (producerId: number, status: boolean) => void;
  checkSubscriptionStatus: (producerId: number) => void;
}
