import { makeStyles } from "@material-ui/core/styles";

export const createStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    marginBottom: theme.spacing(3)
  },
  padding: {
    padding: theme.spacing(2)
  },
  optionsPart: {
    width: "100%",
    marginTop: theme.spacing(3)
  }
}));

export default createStyles;
