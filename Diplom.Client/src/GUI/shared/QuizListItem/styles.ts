import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles((theme) => ({
  card: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  link: {
    cursor: "pointer",
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(2),
  },
}));

export default createStyles;
