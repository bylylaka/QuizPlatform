import { makeStyles } from "@material-ui/core/styles";

export const createStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(2),
    height: 70
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(2)
  }
}));

export default createStyles;
