import { ISearchFieldProps, ISearchFieldCallProps } from "./props";
import { RootState } from "../../../logic/reducers/rootReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import SearchField from "./SearchField";
import Actions from "../../../logic/actions/actions";

const mapStateToProps = (state: RootState): ISearchFieldProps => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch): ISearchFieldCallProps => {
  return {
    search: (string: string) => dispatch(Actions.search(string))
  };
};

const SearchFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField);

export default SearchFieldContainer;
