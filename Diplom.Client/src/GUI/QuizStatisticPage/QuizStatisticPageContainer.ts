import { connect } from "react-redux";
import {
  IQuizStatisticsPageProps,
  IQuizStatisticsPageCallProps,
} from "./props";
import { Dispatch } from "redux";
import QuizStatisticsPage from "./QuizStatisticsPage";
import Actions from "../../logic/actions/actions";
import { RootState } from "../../logic/reducers/rootReducer";

const mapStateToProps = (state: RootState): IQuizStatisticsPageProps => {
  return {
    statistic: state.reducer.quizStatistic,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IQuizStatisticsPageCallProps => {
  return {
    setTitle: (title: string) => dispatch(Actions.setTitle(title)),
    loadStatistic: (quizId: number) =>
      dispatch(Actions.loadQuizStatistic(quizId)),
  };
};

const QuizStatisticsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizStatisticsPage) as React.ComponentType;

export default QuizStatisticsPageContainer;
