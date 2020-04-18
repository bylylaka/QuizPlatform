import React, { FunctionComponent } from "react";
import { IStatisticRenderStrategyProps } from "../props";
import createStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  BarChart,
  Legend,
} from "recharts";
import Grid from "@material-ui/core/Grid";

export const StatisticRenderCheckboxStrategy: FunctionComponent<IStatisticRenderStrategyProps> = (
  props
) => {
  const { question } = props;

  const classes = createStyles();

  const data = [
    {
      yes: question.answers.filter((a) => a.value).length,
      no: question.answers.filter((a) => !a.value).length,
    },
  ];

  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
      <Grid item>
        <Typography component="h1" variant="h5" align="center">
          {question.title}
        </Typography>
      </Grid>
      <Grid item>
        <BarChart width={300} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="yes" fill="#82ca9d" />
          <Bar dataKey="no" fill="#8884d8" />
        </BarChart>
      </Grid>
    </Grid>
  );
};

export default StatisticRenderCheckboxStrategy;
