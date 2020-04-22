import { RootState } from "../../reducers/rootReducer";

const Selectors = {
  myProfileSimplified(state: RootState) {
    return state.reducer.myProfileSimplified;
  },
  activeHeaderComponents(state: RootState) {
    return state.reducer.activeHeaderComponents
  },
  quizStatistic(state: RootState) {
    return state.reducer.quizStatistic
  },
  quizFilteredStatistic(state: RootState) {
    return state.reducer.quizFilteredStatistic
  }
};

export default Selectors;
