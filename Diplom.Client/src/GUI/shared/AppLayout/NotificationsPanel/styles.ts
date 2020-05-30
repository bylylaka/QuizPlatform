import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles((theme) => ({
  container: {
    padding: "0 24px 24px",
  },
  drawer: {
    width: 350,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 350,
    marginLeft: 73,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  firstInfoRow: {
    margin: 0,
  },
  secondInfoRow: {
    fontWeight: "bold",
    margin: 0,
    textDecoration: "none",
    color: theme.palette.primary.dark,
  },
  name: {
    fontWeight: "bold",
    textDecoration: "none",
    color: theme.palette.primary.dark,
  },
  notificationBlock: {
    margin: "15px 0",
  },
  closeButton: {
    width: "fit-content",
    alignSelf: "flex-end",
    margin: "8px 8px 0 0",
  },
}));

export default createStyles;
