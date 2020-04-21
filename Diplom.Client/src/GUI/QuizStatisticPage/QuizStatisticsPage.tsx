import React, { FunctionComponent, useEffect, useState } from "react";
import {
  IQuizStatisticsPageProps,
  IQuizStatisticsPageCallProps,
} from "./props";
import createStyles from "./styles";
import { useParams } from "react-router";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import StatisticQuestion from "../../shared/models/quiz/StatisticQuestion";
import QuestionType from "../../shared/models/quiz/QuestionType";
import StatisticRenderTextStrategy from "./StatisticRenderStrategies/StatisticRenderTextStrategy/StatisticRenderTextStrategy";
import StatisticRenderNumberStrategy from "./StatisticRenderStrategies/StatisticRenderNumberStrategy/StatisticRenderNumberStrategy";
import StatisticRenderDateStrategy from "./StatisticRenderStrategies/StatisticRenderDateStrategy/StatisticRenderDateStrategy";
import StatisticRenderCheckboxStrategy from "./StatisticRenderStrategies/StatisticRenderChechboxStrategy/StatisticRenderNumberStrategy";
import StatisticRenderSelectStrategy from "./StatisticRenderStrategies/StatisticRenderSelectStrategy/StatisticRenderSelectStrategy";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import FilterListIcon from "@material-ui/icons/FilterList";
import QuizStatisticsFilterContainer from "./QuizStatisticPageFilter/QuizStatisticFilterContainer";
import Tooltip from "@material-ui/core/Tooltip";

export const QuizStatisticsPage: FunctionComponent<
  IQuizStatisticsPageProps & IQuizStatisticsPageCallProps
> = (props) => {
  const {
    setTitle,
    setActiveHeaderComponents,
    loadStatistic,
    statistic,
    formValues,
  } = props;

  const classes = createStyles();

  const { id } = useParams();

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (!statistic) {
      return;
    }
    setTitle(`${statistic.title}`);
  }, [statistic]);

  useEffect(() => {
    let filtered = false;
    if (formValues) {
      for (let [key, value] of Object.entries(formValues)) {
        // console.log(`${key}: ${value}`);
        if (value != null && key != "age") {
          filtered = true;
        }
      }
    }

    const activeHeaderComponents = [
      <Tooltip title="фильтр">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={toggleDrawer}
        >
          {filtered ? <FilterListIcon color={"error"} /> : <FilterListIcon />}
        </IconButton>
      </Tooltip>,
    ];

    setActiveHeaderComponents(activeHeaderComponents);
  }, [open, formValues]);

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

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Container component="main" maxWidth="lg">
      <Grid
        className={clsx(classes.content, {
          [classes.contentShift]: open,
          [classes.questionsBlock]: true,
        })}
      >
        {renderQuestions()}
      </Grid>
      <QuizStatisticsFilterContainer open={open} />
    </Container>
  );
};

export default QuizStatisticsPage;
