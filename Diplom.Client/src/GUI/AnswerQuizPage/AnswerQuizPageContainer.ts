import { connect } from "react-redux";
import { IAnswerQuizPageProps, IAnswerQuizPageCallProps } from "./props";
import { Dispatch } from "redux";
import AnswerQuizPage from "./AnswerQuizPage";
import Actions from "../../logic/actions/actions";
import { RootState } from "../../logic/reducers/rootReducer";
import Answer from "../../shared/models/quiz/Answer";

const mapStateToProps = (state: RootState): IAnswerQuizPageProps => {
  return {
    quiz: state.reducer.quiz
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IAnswerQuizPageCallProps => {
  return {
    setTitle: (title: string) => dispatch(Actions.setTitle(title)),
    loadQuiz: (id: number) => dispatch(Actions.getQuiz(id)),
    submitAnswers: (answers: Answer[]) => dispatch(Actions.answerQuiz(answers))
  };
};

const AnswerQuizPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerQuizPage) as React.ComponentType;

export default AnswerQuizPageContainer;
