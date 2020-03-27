import { connect } from "react-redux";
import { IAppLayoutProps } from "./props";
import { RootState } from "../../../logic/reducers/rootReducer";
import AppLayout from "./AppLayout";

const mapStateToProps = (state: RootState): IAppLayoutProps => {
  return {
    title: state.reducer.title
  };
};

const AppLayoutContainer = connect(mapStateToProps)(
  AppLayout
) as React.ComponentType;

export default AppLayoutContainer;
