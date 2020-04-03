import { makeStyles } from "@material-ui/core/styles";

export const createStyles = makeStyles(theme => ({
  option: {
    flexGrow: 1,
    width: "auto"
  },
  padding: {
    padding: theme.spacing(2),
    width: "100%"
  },
  optionsPart: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  removeIcon: {
    height: "fit-content",
    marginLeft: theme.spacing(2)
  }
}));

export default createStyles;
