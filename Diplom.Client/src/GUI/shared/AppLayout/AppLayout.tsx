import React, { FunctionComponent, useEffect, useState } from "react";
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
import { BrowserRouter, useHistory } from "react-router-dom";
import NotificationsPanelContainer from "./NotificationsPanel/NotificationsPanelContainer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";

const AppLayout: FunctionComponent<IAppLayoutProps & IAppLayoutCallProps> = (
  props
) => {
  const {
    title,
    activeHeaderComponents,
    logout,
    loadMyProfileSimplified,
    profileId,
    notifications,
  } = props;

  const classes = createStyles();
  let history = useHistory();

  const [notificationsDrawerOpen, setNotificationsDrawerOpen] = useState(false);

  const toggleNotificationsDrawer = () => {
    setNotificationsDrawerOpen(!notificationsDrawerOpen);
  };

  const closeNotificationsDrawer = () => {
    setNotificationsDrawerOpen(false);
  };

  useEffect(() => {
    loadMyProfileSimplified();
  }, []);

  const handleLogout = () => {
    logout();
  };

  const profileRedirect = () => {
    history.push(`/user/${profileId}`);
  };

  const searchRedirect = () => {
    history.push(`/search`);
  };

  const hasNewNotification = () => notifications.some((n) => !n.wasOpened);

  const renderNotificationsIcon = (): JSX.Element => {
    if (hasNewNotification()) {
      return (
        <Badge color="secondary" variant="dot">
          <NotificationsIcon className={classes.listIcon} />
        </Badge>
      );
    } else {
      return <NotificationsIcon className={classes.listIcon} />;
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            {title}
          </Typography>
          {activeHeaderComponents}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, classes.drawerClose)}
        classes={{
          paper: classes.drawerClose,
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
                <Tooltip title="My profile" onClick={profileRedirect}>
                  <ListItemIcon>
                    <PersonIcon className={classes.listIcon} />
                  </ListItemIcon>
                </Tooltip>
              </ListItem>
              <ListItem button>
                <Tooltip title="Search" onClick={searchRedirect}>
                  <ListItemIcon>
                    <SearchIcon className={classes.listIcon} />
                  </ListItemIcon>
                </Tooltip>
              </ListItem>
              <ListItem button>
                <Tooltip
                  title="Notifications"
                  onClick={toggleNotificationsDrawer}
                >
                  <ListItemIcon>{renderNotificationsIcon()}</ListItemIcon>
                </Tooltip>
              </ListItem>
            </Grid>
            <Grid item className={classes.fitContent}>
              <ListItem button onClick={handleLogout}>
                <Tooltip title="Exit">
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
        <NotificationsPanelContainer
          open={notificationsDrawerOpen}
          close={closeNotificationsDrawer}
          notifications={notifications}
        />
      </main>
    </div>
  );
};

export default AppLayout;
