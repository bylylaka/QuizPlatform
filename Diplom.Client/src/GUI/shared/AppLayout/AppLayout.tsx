import React, { FunctionComponent, useEffect } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import Tooltip from "@material-ui/core/Tooltip";
import AppRouter from "../../routes/AppRouter/AppRouter";
import createStyles from "./styles";
import { IAppLayoutProps, IAppLayoutCallProps } from "./props";
import Grid from "@material-ui/core/Grid";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { Link, BrowserRouter as Router, useHistory } from "react-router-dom";

const AppLayout: FunctionComponent<IAppLayoutProps &
  IAppLayoutCallProps> = props => {
  const { title, logout, loadMyProfileSimplified, profileId } = props;

  const classes = createStyles();
  let history = useHistory();

  useEffect(() => {
    loadMyProfileSimplified();
  }, []);

  const handleLogout = () => {
    logout();
  };

  const profileRedirect = () => {
    history.push(`/user/${profileId}`);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, classes.drawerClose)}
        classes={{
          paper: classes.drawerClose
        }}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List className={classes.fullHeight}>
          <Grid
            item
            container
            direction="column"
            justify="space-between"
            className={classes.fullHeight}
          >
            <Grid item className={classes.fitContent}>
              <ListItem button>
                <Tooltip title="Мой профиль" onClick={profileRedirect}>
                  <ListItemIcon>
                    <PersonIcon className={classes.listIcon} />
                  </ListItemIcon>
                </Tooltip>
              </ListItem>
              <ListItem button>
                <Tooltip title="Поиск">
                  <ListItemIcon>
                    <SearchIcon className={classes.listIcon} />
                  </ListItemIcon>
                </Tooltip>
              </ListItem>
            </Grid>
            <Grid item className={classes.fitContent}>
              <ListItem button onClick={handleLogout}>
                <Tooltip title="Выход">
                  <ListItemIcon>
                    <PowerSettingsNewIcon
                      color="error"
                      className={classes.listIcon}
                    />
                  </ListItemIcon>
                </Tooltip>
              </ListItem>
            </Grid>
          </Grid>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <AppRouter />
      </main>
    </div>
  );
};

export default AppLayout;
