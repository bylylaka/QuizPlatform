export interface IAppLayoutProps {
  title: string;
  profileId?: number;
  activeHeaderComponents: JSX.Element[]
}

export interface IAppLayoutCallProps {
  loadMyProfileSimplified: () => void;
  logout: () => void;
}
