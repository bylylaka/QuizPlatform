import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles(theme => ({
  disabled: {
    color: "black!important"
  },
  slider: {
    paddingTop: theme.spacing(3)
  }
}));

export default createStyles;
