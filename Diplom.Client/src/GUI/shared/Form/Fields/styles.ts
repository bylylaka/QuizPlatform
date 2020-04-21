import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles(theme => ({
  disabled: {
    color: "black!important"
  },
  slider: {
    paddingTop: theme.spacing(3)
  },
  multipleSelectMargin: {
    marginTop: theme.spacing(2),
  },
  multipleSelectRoot: {
    border: "1px solid",
    borderColor: theme.palette.primary.main,
    borderRadius: 5,
    padding: theme.spacing(1),
    paddingBottom: 0
  },
  displayContents: {
    display: "contents"
  },
}));

export default createStyles;
