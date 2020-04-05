import React, { useEffect } from "react";
import { IUserPageProps, IUserPageCallProps } from "./interface";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import createStyles from "./styles";
import UserInfoFormContainer from "./UserInfoForm/UserInfoFormContainer";
import { useParams, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import UserQuizListContainer from "./UserQuizList/UserQuizListContainer";

export const UserPage: React.FunctionComponent<
  IUserPageProps & IUserPageCallProps
> = (props) => {
  const { setTitle, getUser, user, isMyProfile } = props;

  const classes = createStyles();

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    if (id) {
      getUser(Number(id));
    }
  }, [id]);

  useEffect(() => {
    if (user) {
      setTitle(user.name as string);
    }
  }, [user]);

  const onAddQuizClick = () => {
    history.push("/createQuiz");
  };

  if (!user) {
    return <CircularProgress />;
  }

  return (
    <Grid container justify="center">
      <Grid container item className={classes.root}>
        <UserInfoFormContainer />
        {isMyProfile && (
          <Grid container justify="flex-end">
            <Tooltip title="Создать опрос">
              <IconButton onClick={onAddQuizClick}>
                <AddCircleOutlinedIcon color="secondary" fontSize="large" />
              </IconButton>
            </Tooltip>
          </Grid>
        )}
        <UserQuizListContainer user={user} />
      </Grid>
    </Grid>
  );
};

export default UserPage;
