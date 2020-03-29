import { makeStyles } from "@material-ui/core/styles";

export const createStyles = makeStyles(theme => ({
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    marginBottom: theme.spacing(5)
  },
  searchInput: {
    fontSize: theme.typography.fontSize
  },
  block: {
    display: "block"
  },
  searchButton: {
    marginRight: theme.spacing(1)
  }
}));

export default createStyles;
