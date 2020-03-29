import React, { useEffect } from "react";
import { IUserPageProps, IUserPageCallProps } from "./interface";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import createStyles from "./styles";
import UserInfoFormContainer from "./UserInfoForm/UserInfoFormContainer";
import { useParams } from "react-router-dom";

export const UserPage: React.FunctionComponent<IUserPageProps &
  IUserPageCallProps> = props => {
  const { setTitle, getUser, user } = props;

  const classes = createStyles();

  const { id } = useParams();

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

  if (!user) {
    return <CircularProgress />;
  }

  return (
    <Grid container justify="center">
      <Grid container item className={classes.root}>
        <UserInfoFormContainer />
      </Grid>
    </Grid>
  );
};

export default UserPage;
