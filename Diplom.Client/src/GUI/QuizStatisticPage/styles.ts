import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles((theme) => ({
  questionsBlock: {
    marginTop: theme.spacing(2),
  },
  card: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  }
}));

export default createStyles;
