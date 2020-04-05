import React, { useEffect } from "react";
import { IUserQuizListProps, IUserQuizListCallProps } from "./props";
import Grid from "@material-ui/core/Grid";
import createStyles from "./styles";
import User from "../../../shared/models/user/User";
import QuizListItem from "../../shared/QuizListItem/QuizListItem";

export const UserQuizList: React.FunctionComponent<
  IUserQuizListProps & IUserQuizListCallProps
> = (props) => {
  const { loadUserQuizList, user, quizes } = props;

  const classes = createStyles();

  useEffect(() => {
    if (user) {
      loadUserQuizList(Number((user as User).id));
    }
  }, [user]);

  if (!user) {
    return <React.Fragment />;
  }

  const renderQuizList = (): JSX.Element[] => {
    return quizes.map((quiz) => <QuizListItem quiz={quiz} user={user} />);
  };

  return <Grid className={classes.listContainer}>{renderQuizList()}</Grid>;
};

export default UserQuizList;
