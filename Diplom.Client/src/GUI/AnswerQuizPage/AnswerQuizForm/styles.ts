import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles(theme => ({
  questionsBlock: {
    marginTop: theme.spacing(2)
  },
  card: {
    flexGrow: 1,
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    marginBottom: theme.spacing(3)
  }
}));

export default createStyles;
