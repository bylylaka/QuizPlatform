import React from "react";
import { IQuizListItemProps, IQuizListItemCallProps } from "./props";
import createStyles from "./styles";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

export const QuizListItem: React.FunctionComponent<
  IQuizListItemProps & IQuizListItemCallProps
> = (props) => {
  const { item } = props;

  const classes = createStyles();

  const history = useHistory();

  const answerQuiz = () => {
    history.push(`/anwserQuiz/${item.quizId}`);
  };

  const onUserNameClick = () => {
    history.push(`/user/${item.user.id}`);
  };

  const userLink = () => {
    return (
      <span onClick={onUserNameClick} className={classes.link}>
        {item.user.name}
      </span>
    );
  };

  return (
    <Card className={classes.card}>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            src={(item.user.avatar as string) || ""}
            classes={{
              root: classes.avatar,
            }}
          />
        </ListItemAvatar>
        <ListItemText primary={item.title} secondary={userLink()} />
        <Typography
          color="primary"
          onClick={answerQuiz}
          className={classes.link}
        >
          Принять участие
        </Typography>
      </ListItem>
    </Card>
  );
};

export default QuizListItem;