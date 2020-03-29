import { ISearchListProps, ISearchListCallProps } from "./props";
import { RootState } from "../../../logic/reducers/rootReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import SearchList from "./SearchList";

const mapStateToProps = (state: RootState): ISearchListProps => {
  return {
    users: state.reducer.searchUsers
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ISearchListCallProps => {
  return {};
};

const SearchListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList);

export default SearchListContainer;
