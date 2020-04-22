import StatisticFilter from "../../../shared/models/quiz/Filter/StatusticFilter";

export interface IQuizStatisticsFilterProps {
    open: boolean;
    selectedCountry: number;
}

export interface IQuizStatisticsFilterCallProps {
    submitFilter: (filter: StatisticFilter) => void;
}
