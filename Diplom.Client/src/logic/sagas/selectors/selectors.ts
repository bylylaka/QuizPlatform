import { RootState } from "../../reducers/rootReducer";

const Selectors = {
  myProfileSimplified(state: RootState) {
    return state.reducer.myProfileSimplified;
  }
};

export default Selectors;
