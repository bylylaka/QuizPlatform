import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import NotFountPage from "../../NotFountPage/NotFoundPage";
import UserPageContainer from "../../UserPage/UserPageContainer";
import createStyles from "./styles";
import SearchPageContainer from "../../SearchPage/SearchPageContainer";
import CreateQuizPageContainer from "../../CreateQuizPage/CreateQuizPageContainer";
import AnswerQuizPageContainer from "../../AnswerQuizPage/AnswerQuizPageContainer";

const AppRouter: FunctionComponent = () => {
  const classes = createStyles();

  return (
    <Switch>
      <Route exact path="/user/:id" component={UserPageContainer} />
      <Route exact path="/search" component={SearchPageContainer} />
      <Route exact path="/createQuiz" component={CreateQuizPageContainer} />
      <Route exact path="/createQuiz" component={CreateQuizPageContainer} />
      <Route exact path="/anwserQuiz/:id" component={AnswerQuizPageContainer} />
      <Route component={NotFountPage} />
    </Switch>
  );
};

export default AppRouter;
