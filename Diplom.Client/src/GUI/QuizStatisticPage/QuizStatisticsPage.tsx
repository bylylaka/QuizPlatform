import React, { FunctionComponent, useEffect, useState } from "react";
import {
  IQuizStatisticsPageProps,
  IQuizStatisticsPageCallProps,
} from "./props";
import createStyles from "./styles";
import { useParams } from "react-router";
import Container from "@material-ui/core/Container";
import { reduxForm, Field } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import StatisticQuestion from "../../shared/models/quiz/StatisticQuestion";
import QuestionType from "../../shared/models/quiz/QuestionType";
import StatisticRenderTextStrategy from "./StatisticRenderStrategies/StatisticRenderTextStrategy/StatisticRenderTextStrategy";
import StatisticRenderNumberStrategy from "./StatisticRenderStrategies/StatisticRenderNumberStrategy/StatisticRenderNumberStrategy";
import StatisticRenderDateStrategy from "./StatisticRenderStrategies/StatisticRenderDateStrategy/StatisticRenderDateStrategy";
import StatisticRenderCheckboxStrategy from "./StatisticRenderStrategies/StatisticRenderChechboxStrategy/StatisticRenderNumberStrategy";
import StatisticRenderSelectStrategy from "./StatisticRenderStrategies/StatisticRenderSelectStrategy/StatisticRenderSelectStrategy";

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

  const renderQuestion = (question: StatisticQuestion): JSX.Element => {
    switch (question.type) {
      case QuestionType.Text:
        return <StatisticRenderTextStrategy question={question} />;
      case QuestionType.Number:
        return <StatisticRenderNumberStrategy question={question} />;
      case QuestionType.Select:
        return <StatisticRenderSelectStrategy question={question} />;
      case QuestionType.Checkbox:
        return <StatisticRenderCheckboxStrategy question={question} />;
      case QuestionType.Date:
        return <StatisticRenderDateStrategy question={question} />;
    }
  };

  const renderQuestions = (): JSX.Element[] => {
    if (!statistic || !statistic.questions) {
      return [] as any;
    }
    return statistic.questions.map((q) => {
      return (
        <Card className={classes.card}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {renderQuestion(q)}
            </Grid>
          </Grid>
        </Card>
      );
    });
  };

  return (
    <Container component="main" maxWidth="lg">
      <Grid className={classes.questionsBlock}>{renderQuestions()}</Grid>
    </Container>
  );
};

export default QuizStatisticsPage;
