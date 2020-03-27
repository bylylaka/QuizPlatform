import React, { useEffect } from "react";
import { IProfilePageProps, IProfilePageCallProps } from "./interface";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import createStyles from "./styles";
import ProfileInfoFormContainer from "./ProfileInfoForm/ProfileInfoFormContainer";

export const ProfilePage: React.FunctionComponent<IProfilePageProps &
  IProfilePageCallProps> = props => {
  const { setTitle, getProfile, profile, logout } = props;

  const classes = createStyles();

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (profile) {
      setTitle(profile.name as string);
    }
  }, [profile]);

  const handleLogout = () => {
    logout();
  };

  if (!profile) {
    return <CircularProgress />;
  }

  //TODO: move ВЫХОД в боковое меню
  return (
    <Grid container justify="center">
      <Grid container item className={classes.root}>
        <ProfileInfoFormContainer />
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
