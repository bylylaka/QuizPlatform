import React, { FunctionComponent } from "react";
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
import { IAppLayoutProps } from "./props";

const AppLayout: FunctionComponent<IAppLayoutProps> = props => {
  const { title } = props;

  const classes = createStyles();

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
        <List>
          <ListItem button>
            <Tooltip title="Мой профиль">
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
