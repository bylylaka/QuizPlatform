import { connect } from "react-redux";
import { ICreateQuizPageProps, ICreateQuizPageCallProps } from "./props";
import { Dispatch } from "redux";
import CreateQuizPage from "./CreateQuizPage";
import Actions from "../../logic/actions/actions";
import { RootState } from "../../logic/reducers/rootReducer";
import { getFormValues } from "redux-form";
import FormNames from "../shared/Form/FormNames";

const mapStateToProps = (state: RootState): ICreateQuizPageProps => {
  return {
    formValues: getFormValues(FormNames.createQuizForm.name)(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ICreateQuizPageCallProps => {
  return {
    setTitle: (title: string) => dispatch(Actions.setTitle(title))
  };
};

const CreateQuizPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateQuizPage) as React.ComponentType;

export default CreateQuizPageContainer;
