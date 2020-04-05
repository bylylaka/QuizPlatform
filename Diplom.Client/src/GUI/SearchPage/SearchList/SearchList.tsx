import React, { FunctionComponent, useEffect, useState } from "react";
import createStyles from "./styles";
import { ISearchListProps, ISearchListCallProps } from "./props";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import SearchListUserItem from "./SearchListUserItem/SearchListUserItem";
import SearchItemUserModel from "./SearchListUserItem/models/SearchItemUserModel";
import UserSimplified from "../../../shared/models/user/UserSimplified";
import QuizListItem from "../../shared/QuizListItem/QuizListItem";

const SearchList: FunctionComponent<ISearchListProps & ISearchListCallProps> = (
  props
) => {
  const { users, quizes } = props;

  const classes = createStyles();

  const getAvatarUrl = (avatar?: string) => {
    if (!avatar) {
      return "images\\\\social_network.jpg";
    }
    return avatar.replace("\\", "\\\\");
  };

  const renderUsersList = (): JSX.Element[] => {
    return users.map((user) => {
      const avatar = getAvatarUrl(user.avatar);

      var model = new SearchItemUserModel(user.id, user.name, avatar);
      return <SearchListUserItem item={model} />;
    });
  };

  const rendexQuizesList = (): JSX.Element[] => {
    return quizes.map((quiz) => {
      const avatar = getAvatarUrl((quiz.user as UserSimplified).avatar);
      (quiz.user as UserSimplified).avatar = avatar;

      return <QuizListItem item={quiz} />;
    });
  };

  if (!users.length && !quizes.length) {
    return (
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          Результаты не обнаружены
        </Typography>
      </div>
    );
  }

  return (
    <div className={classes.contentWrapper}>
      {users.length > 0 && (
        <Typography
          component="h6"
          variant="h6"
          align="center"
          className={classes.searchListTitle}
        >
          Пользователи
        </Typography>
      )}
      {renderUsersList()}
      {quizes.length > 0 && (
        <Typography
          component="h6"
          variant="h6"
          align="center"
          className={classes.searchListTitle}
        >
          Опросы
        </Typography>
      )}
      {rendexQuizesList()}
    </div>
  );
};

export default SearchList;
