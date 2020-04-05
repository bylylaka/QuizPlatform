import React, { useEffect } from "react";
import { IUserQuizListProps, IUserQuizListCallProps } from "./props";
import Grid from "@material-ui/core/Grid";
import createStyles from "./styles";
import User from "../../../shared/models/user/User";
import QuizListItem from "../../shared/QuizListItem/QuizListItem";
import QuizSearch from "../../../shared/models/quiz/QuizSearch";
import UserSimplified from "../../../shared/models/user/UserSimplified";

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
    return quizes.map((quiz) => {
      const userSimplifiedModel = new UserSimplified();
      userSimplifiedModel.id = user.id;
      userSimplifiedModel.name = user.name;
      userSimplifiedModel.avatar = user.avatar as string;

      const item = new QuizSearch(
        Number(quiz.id),
        quiz.title as string,
        userSimplifiedModel
      );
      return <QuizListItem item={item} />;
    });
  };

  return <Grid className={classes.listContainer}>{renderQuizList()}</Grid>;
};

export default UserQuizList;
