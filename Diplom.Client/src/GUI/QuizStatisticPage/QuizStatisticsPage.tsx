import React, { FunctionComponent, useEffect, useState } from "react";
import {
  IQuizStatisticsPageProps,
  IQuizStatisticsPageCallProps,
} from "./props";
import createStyles from "./styles";
import { useParams } from "react-router";

export const QuizStatisticsPage: FunctionComponent<
  IQuizStatisticsPageProps & IQuizStatisticsPageCallProps
> = (props) => {
  const { setTitle, loadStatistic, statistic } = props;

  const classes = createStyles();

  const { id } = useParams();

  useEffect(() => {
    if (!statistic) {
      return;
    }
    setTitle(`${statistic.title}`);
  }, [statistic]);

  useEffect(() => {
    if (id) {
      loadStatistic(Number(id));
    }
  }, [id]);

  console.log(statistic);

  return <p>123</p>;
};

export default QuizStatisticsPage;
