export interface IStartNavigationPageProps {
  isAuthorized: boolean | undefined;
}

export interface IStartNavigationPageCallProps {
  checkAuthorized: () => void;
}
