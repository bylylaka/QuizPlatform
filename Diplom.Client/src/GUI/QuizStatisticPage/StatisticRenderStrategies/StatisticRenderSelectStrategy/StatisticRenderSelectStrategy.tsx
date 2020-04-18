import React, { FunctionComponent, useEffect, useState } from "react";
import { IStatisticRenderStrategyProps } from "../props";
import createStyles from "./styles";
import { useParams } from "react-router";
import Container from "@material-ui/core/Container";
import { reduxForm, Field } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StatisticAnswer from "../../../../shared/models/quiz/StatisticAnswer";
import _ from "lodash";
import { PieChart, Pie, Tooltip } from "recharts";
import Option from "../../../../shared/models/quiz/Option";
import ValueCountModel from "../models/ValueCountModel";

class ChartData {
  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
  name: string;
  value: number;
}

export const StatisticRenderSelectStrategy: FunctionComponent<IStatisticRenderStrategyProps> = (
  props
) => {
  const { question } = props;

  const [chartData, setChartData] = useState([] as ChartData[]);

  const classes = createStyles();

  useEffect(() => {
    // const data = _(question.answers)
    // .groupBy((a) => a.value)
    // .map((items: any, name: string) => {
    //     const title = ((question.options as Option[]).find(option => option.id == Number(name)) as Option).title as string;
    //     return new ChartData(title, items.length);
    // })
    // .value();

    const data = (question.options as Option[]).map(
        (option) =>
          new ChartData(
            option.title as string,
            question.answers.filter((answer) => answer.value === option.id).length
          )
      ).filter(data => Boolean(data.value));

    setChartData(data);

    console.log(data);
  }, [question]);

  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
      <Grid item>
        <Typography component="h1" variant="h5" align="center">
          {question.title}
        </Typography>
      </Grid>
      <Grid item>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={chartData}
            outerRadius={130}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </Grid>
    </Grid>
  );
};

export default StatisticRenderSelectStrategy;
