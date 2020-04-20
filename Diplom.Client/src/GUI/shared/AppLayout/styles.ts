import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  title: {
    flexGrow: 1
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    whiteSpace: "nowrap",
    marginBottom: 30
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  listIcon: {
    marginLeft: 7
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  fullHeight: {
    height: "100%"
  },
  fitContent: {
    height: "fit-content"
  }
}));

export default createStyles;
