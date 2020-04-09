import { connect } from "react-redux";
import { IQuizResultsPageProps, IQuizResultsPageCallProps } from "./props";
import { Dispatch } from "redux";
import QuizResultsPage from "./QuizResultsPage";
import Actions from "../../logic/actions/actions";
import { RootState } from "../../logic/reducers/rootReducer";
import Quiz from "../../shared/models/quiz/Quiz";

const mapStateToProps = (state: RootState): IQuizResultsPageProps => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch): IQuizResultsPageCallProps => {
  return {};
};

const QuizResultsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizResultsPage) as React.ComponentType;

export default QuizResultsPageContainer;
