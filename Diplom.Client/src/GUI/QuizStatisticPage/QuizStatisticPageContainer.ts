import { connect } from "react-redux";
import {
  IQuizStatisticsPageProps,
  IQuizStatisticsPageCallProps,
} from "./props";
import { Dispatch } from "redux";
import QuizStatisticsPage from "./QuizStatisticsPage";
import Actions from "../../logic/actions/actions";
import { RootState } from "../../logic/reducers/rootReducer";
import FormNames from "../shared/Form/FormNames";

const mapStateToProps = (state: RootState): IQuizStatisticsPageProps => {
  return {
    statistic: state.reducer.quizStatistic,
    formValues: state.form[FormNames.filterAnswers.name] && state.form[FormNames.filterAnswers.name].values
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IQuizStatisticsPageCallProps => {
  return {
    setTitle: (title: string) => dispatch(Actions.setTitle(title)),
    setActiveHeaderComponents: (components: JSX.Element[]) => dispatch(Actions.setActiveHederComponents(components)),
    loadStatistic: (quizId: number) =>
      dispatch(Actions.loadQuizStatistic(quizId)),
  };
};

const QuizStatisticsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizStatisticsPage) as React.ComponentType;

export default QuizStatisticsPageContainer;
