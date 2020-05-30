import SiteNotification from "../../../shared/models/notification/SiteNotification";

export interface IAppLayoutProps {
  title: string;
  profileId?: number;
  activeHeaderComponents: JSX.Element[];
  notifications: SiteNotification[];
}

export interface IAppLayoutCallProps {
  loadMyProfileSimplified: () => void;
  logout: () => void;
}
