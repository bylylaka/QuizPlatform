import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles({
  root: {
    width: "100%"
  },
  avatarBlock: {
    width: "100%",
    height: 375,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionY: "50%",
    alignItems: "flex-end"
  },
  collapse: {
    display: "flex",
    flexDirection: "column"
  },
  submitButton: {
    marginTop: 20
  }
});

export default createStyles;
