import { makeStyles } from "@material-ui/core/styles";

export const createStyles = makeStyles(theme => ({
  card: {
    flexGrow: 1,
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    marginBottom: theme.spacing(3)
  },
  removeIcon: {
    height: "fit-content",
    marginLeft: theme.spacing(2)
  }
}));

export default createStyles;
