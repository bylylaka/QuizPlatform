import { ISearchPageProps, ISearchPageCallProps } from "./props";
import { RootState } from "../../logic/reducers/rootReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import SearchPage from "./SearchPage";
import Actions from "../../logic/actions/actions";

const mapStateToProps = (state: RootState): ISearchPageProps => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch): ISearchPageCallProps => {
  return {
    setTitle: (title: string) => dispatch(Actions.setTitle(title))
  };
};

const SearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);

export default SearchPageContainer;
