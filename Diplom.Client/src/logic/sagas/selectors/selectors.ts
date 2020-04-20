import { RootState } from "../../reducers/rootReducer";

const Selectors = {
  myProfileSimplified(state: RootState) {
    return state.reducer.myProfileSimplified;
  },
  activeHeaderComponents(state: RootState) {
    return state.reducer.activeHeaderComponents
  }
};

export default Selectors;
