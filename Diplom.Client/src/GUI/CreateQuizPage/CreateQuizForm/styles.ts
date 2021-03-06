import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles(theme => ({
  titleField: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3)
  },
  questionsBlock: {
    marginTop: theme.spacing(2)
  }
}));

export default createStyles;
