import React, { FunctionComponent } from "react";
import createStyles from "./styles";
import { ISearchListItemProps, ISearchListItemCallProps } from "./props";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Link } from "react-router-dom";

const SearchListItem: FunctionComponent<ISearchListItemProps &
  ISearchListItemCallProps> = props => {
  const { item } = props;

  const classes = createStyles();

  return (
    <Card className={classes.card}>
      <Link to={`/user/${item.id}`} className={classes.link}>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              src={item.avatar}
              classes={{
                root: classes.avatar
              }}
            />
          </ListItemAvatar>
          <ListItemText primary={item.title} secondary={item.subtitle} />
        </ListItem>
      </Link>
    </Card>
  );
};

export default SearchListItem;
