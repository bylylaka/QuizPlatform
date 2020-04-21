import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles((theme) => ({
  container: {
    padding: 24
  },
  drawer: {
    width: 350,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 350,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }
}));

export default createStyles;
