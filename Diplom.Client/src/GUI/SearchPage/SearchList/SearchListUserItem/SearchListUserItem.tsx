import React, { FunctionComponent } from "react";
import createStyles from "./styles";
import {
  ISearchListUserItemProps,
  ISearchListUserItemCallProps,
} from "./props";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Link } from "react-router-dom";

const SearchListUserItem: FunctionComponent<
  ISearchListUserItemProps & ISearchListUserItemCallProps
> = (props) => {
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
                root: classes.avatar,
              }}
            />
          </ListItemAvatar>
          <ListItemText primary={item.title} />
        </ListItem>
      </Link>
    </Card>
  );
};

export default SearchListUserItem;
