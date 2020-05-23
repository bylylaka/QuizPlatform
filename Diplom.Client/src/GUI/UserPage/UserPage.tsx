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
import Button from "@material-ui/core/Button";
import User from "../../shared/models/user/User";

export const UserPage: React.FunctionComponent<
  IUserPageProps & IUserPageCallProps
> = (props) => {
  const {
    setTitle,
    getUser,
    user,
    isMyProfile,
    subscriptionStatus,
    checkSubscriptionStatus,
    chagneSubscriptionStatus,
  } = props;

  const classes = createStyles();

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    if (id) {
      getUser(Number(id));
      if (!isMyProfile) {
        checkSubscriptionStatus(Number(id));
      }
    }
  }, [id, isMyProfile]);

  useEffect(() => {
    if (user) {
      setTitle(user.name as string);
    }
  }, [user]);

  const onAddQuizClick = () => {
    history.push("/createQuiz");
  };

  const renderSubscribeButton = (): JSX.Element => {
    if (isMyProfile) {
      return <></>;
    }

    if (subscriptionStatus) {
      return (
        <Button
          type="submit"
          variant="outlined"
          className={classes.subscribeButton}
          onClick={() => chagneSubscriptionStatus(Number(id), false)}
        >
          Unsubscribe
        </Button>
      );
    }
    return (
      <Button
        type="submit"
        className={classes.subscribeButton}
        color="secondary"
        variant="contained"
        onClick={() => chagneSubscriptionStatus(Number(id), true)}
      >
        Subscribe
      </Button>
    );
  };

  if (!user) {
    return <CircularProgress />;
  }

  return (
    <Grid container justify="center">
      <Grid container item className={classes.root}>
        {renderSubscribeButton()}
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
