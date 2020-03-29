import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: `${theme.palette.secondary.main}!important`
  },
  registerButton: {
    textDecoration: "none"
  }
}));

export default createStyles;
