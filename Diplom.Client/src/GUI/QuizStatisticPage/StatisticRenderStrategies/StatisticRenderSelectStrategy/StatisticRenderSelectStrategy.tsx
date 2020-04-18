import React, { FunctionComponent, useEffect, useState } from "react";
import { IStatisticRenderStrategyProps } from "../props";
import createStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { PieChart, Pie, Sector } from "recharts";
import Option from "../../../../shared/models/quiz/Option";

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
  const [activeIndex, setActiveIndex] = useState(0);

  const classes = createStyles();

  useEffect(() => {
    const data = (question.options as Option[])
      .map(
        (option) =>
          new ChartData(
            option.title as string,
            question.answers.filter(
              (answer) => answer.value === option.id
            ).length
          )
      )
      .filter((data) => Boolean(data.value));
    setChartData(data);
  }, [question]);

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Ответов ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Процент ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  const onPieEnter = (data: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
      <Grid item>
        <Typography component="h1" variant="h5" align="center">
          {question.title}
        </Typography>
      </Grid>
      <Grid item>
        <PieChart width={800} height={400}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={chartData}
            dataKey="value"
            cx={300}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </Grid>
    </Grid>
  );
};

export default StatisticRenderSelectStrategy;
