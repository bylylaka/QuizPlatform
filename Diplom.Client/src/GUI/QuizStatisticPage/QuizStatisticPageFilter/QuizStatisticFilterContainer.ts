import { connect } from "react-redux";
import {
  IQuizStatisticsFilterProps,
  IQuizStatisticsFilterCallProps,
} from "./props";
import { Dispatch } from "redux";
import QuizStatisticsFilter from "./QuizStatisticFilter";
import { RootState } from "../../../logic/reducers/rootReducer";
import FormNames from "../../shared/Form/FormNames";
import { formValueSelector } from "redux-form";
import Actions from "../../../logic/actions/actions";
import StatisticFilter from "../../../shared/models/quiz/Filter/StatisticFilter";

type ContainerProps = Pick<
  IQuizStatisticsFilterProps & IQuizStatisticsFilterCallProps,
  "open"
>;

const selector = formValueSelector(FormNames.filterAnswers.name);

const mapStateToProps = (
  state: RootState
): Omit<IQuizStatisticsFilterProps, keyof ContainerProps> => {
  return {
    selectedCountry: selector(
      state,
      FormNames.filterAnswers.fieldNames.country
    ),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): Omit<IQuizStatisticsFilterCallProps, keyof ContainerProps> => {
  return {
    submitFilter: (filter: StatisticFilter) =>
      dispatch(Actions.filterQuizStatistic(filter)),
  };
};

const QuizStatisticsFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizStatisticsFilter) as React.ComponentType<ContainerProps>;

export default QuizStatisticsFilterContainer;
