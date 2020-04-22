import React, { FunctionComponent } from "react";
import {
  IQuizStatisticsFilterProps,
  IQuizStatisticsFilterCallProps,
} from "./props";
import createStyles from "./styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import QuizStatisticsFilterForm from "./QuizStatisticFilterForm/QuizStatisticFilterForm";
import Container from "@material-ui/core/Container";

export const QuizStatisticsFilter: FunctionComponent<
  IQuizStatisticsFilterProps & IQuizStatisticsFilterCallProps
> = (props) => {
  const { open, selectedCountry, submitFilter } = props;

  const classes = createStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader} />
      <Divider />
      <Container className={classes.container}>
        <QuizStatisticsFilterForm
          onSubmit={submitFilter}
          selectedCountry={selectedCountry}
        />
      </Container>
    </Drawer>
  );
};

export default QuizStatisticsFilter;
