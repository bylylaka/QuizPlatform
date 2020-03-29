export interface IAppLayoutProps {
  title: string;
  profileId?: number;
}

export interface IAppLayoutCallProps {
  loadMyProfileSimplified: () => void;
  logout: () => void;
}
