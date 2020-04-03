import { connect } from "react-redux";
import { ICreateQuizPageProps, ICreateQuizPageCallProps } from "./props";
import { Dispatch } from "redux";
import CreateQuizPage from "./CreateQuizPage";
import Actions from "../../logic/actions/actions";
import { RootState } from "../../logic/reducers/rootReducer";
import { getFormValues, actionTypes } from "redux-form";
import FormNames from "../shared/Form/FormNames";
import Quiz from "../../shared/models/quiz/Quiz";

const mapStateToProps = (state: RootState): ICreateQuizPageProps => {
  return {
    formValues: getFormValues(FormNames.createQuizForm.name)(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ICreateQuizPageCallProps => {
  return {
    setTitle: (title: string) => dispatch(Actions.setTitle(title)),
    submitQuiz: (quiz: Quiz) => dispatch(Actions.createQuiz(quiz))
  };
};

const CreateQuizPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateQuizPage) as React.ComponentType;

export default CreateQuizPageContainer;
