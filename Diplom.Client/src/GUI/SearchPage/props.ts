import UserSimplifiedViewModel from "../../shared/models/user/UserSimplifiedViewModel";

export interface ISearchPageProps {
  users: UserSimplifiedViewModel[];
}

export interface ISearchPageCallProps {
  setTitle: (title: string) => void;
  search: (string: string) => void;
}
