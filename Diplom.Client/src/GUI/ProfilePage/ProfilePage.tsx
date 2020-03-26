import React, { useEffect } from "react";
import { IProfilePageProps, IProfilePageCallProps } from "./interface";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProfileForm from "./ProfileForm/ProfileForm";
import User from "../../shared/models/user/User";
import Grid from "@material-ui/core/Grid";
import createStyles from "./styles";

export const ProfilePage: React.FunctionComponent<IProfilePageProps &
  IProfilePageCallProps> = props => {
  const { getProfile, profile, updateProfile, logout } = props;

  const classes = createStyles();

  useEffect(() => {
    getProfile();
  }, []);

  const handleSubmit = (profile: User) => {
    updateProfile(profile);
  };

  const handleLogout = () => {
    logout();
  };

  if (!profile) {
    return <CircularProgress />;
  }

  //TODO: move ВЫХОД в боковое меню
  return (
    <Grid container item className={classes.root}>
      <ProfileForm initialValues={profile} onSubmit={handleSubmit} />
      {/* <Button onClick={handleLogout}>Выход</Button> */}
    </Grid>
  );
};

export default ProfilePage;
