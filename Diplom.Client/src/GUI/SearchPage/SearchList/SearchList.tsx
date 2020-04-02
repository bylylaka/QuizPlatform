import React, { FunctionComponent, useEffect, useState } from "react";
import createStyles from "./styles";
import { ISearchListProps, ISearchListCallProps } from "./props";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import SearchListItem from "./SearchListItem/SearchListItem";
import SearchItemModel from "./SearchListItem/models/SearchItemModel";

const SearchList: FunctionComponent<ISearchListProps &
  ISearchListCallProps> = props => {
  const { users } = props;

  const classes = createStyles();

  const getAvatarUrl = (avatar?: string) => {
    if (!avatar) {
      return "images\\\\social_network.jpg";
    }
    return avatar.replace("\\", "\\\\");
  };

  const renderUsersList = (): JSX.Element[] => {
    return users.map(user => {
      const avatar = getAvatarUrl(user.avatar);

      var model = new SearchItemModel(user.id, user.name, "", avatar);
      return <SearchListItem item={model} />;
    });
  };

  if (!users.length) {
    return (
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          Результаты не обнаружены
        </Typography>
      </div>
    );
  }

  return <div className={classes.contentWrapper}>{renderUsersList()}</div>;
};

export default SearchList;
