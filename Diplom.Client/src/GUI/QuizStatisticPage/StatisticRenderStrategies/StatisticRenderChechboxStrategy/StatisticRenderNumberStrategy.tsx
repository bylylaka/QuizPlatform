import React, { FunctionComponent, useEffect, useState } from "react";
import { IStatisticRenderStrategyProps } from "../props";
import createStyles from "./styles";
import { useParams } from "react-router";
import Container from "@material-ui/core/Container";
import { reduxForm, Field } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import StatisticQuestion from "../../../../shared/models/quiz/StatisticQuestion";
import StatisticAnswer from "../../../../shared/models/quiz/StatisticAnswer";
import _ from "lodash";
import ValueCountModel from "../models/ValueCountModel";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";

export const StatisticRenderCheckboxStrategy: FunctionComponent<IStatisticRenderStrategyProps> = (
  props
) => {
  const { question } = props;

  const classes = createStyles();

  const renderValues = () => {
    const valueCountModels = _(question.answers)
      .groupBy((a) => a.value)
      .map((items: any, name: string) => {
        return new ValueCountModel(name, items.length);
      })
      .value();

    return (
      <Grid container className={classes.cardContent}>
        <Grid item direction="column" className={classes.answersBlock} xs={10}>
          {valueCountModels.map((model: ValueCountModel, index: number) => {
            return (
              <Grid>
                <Typography className={classes.inline}>
                  {index + 1}. {model.value}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item direction="column" className={classes.answerCountBlock}>
          {valueCountModels.map((model: ValueCountModel, index: number) => {
            return (
              <Grid>
                <Typography className={classes.inline}>
                  {model.count}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Typography component="h1" variant="h5" align="center">
        {question.title}
      </Typography>
      {renderValues()}
    </>
  );
};

export default StatisticRenderCheckboxStrategy;
