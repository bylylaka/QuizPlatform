import React, { FunctionComponent, useState } from "react";
import createStyles from "./styles";
import { ISearchFieldProps, ISearchFieldCallProps } from "./props";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

const SearchField: FunctionComponent<ISearchFieldProps &
  ISearchFieldCallProps> = props => {
  const { search } = props;

  const classes = createStyles();

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    search(searchValue);
  };

  return (
    <AppBar
      className={classes.searchBar}
      position="static"
      color="default"
      elevation={0}
    >
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <SearchIcon className={classes.block} color="inherit" />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              value={searchValue}
              onChange={handleChange}
              placeholder="Введите имя пользователя или название опроса"
              InputProps={{
                disableUnderline: true,
                className: classes.searchInput
              }}
            />
          </Grid>
          <Grid item>
            <Button
              onClick={handleSearch}
              variant="contained"
              color="primary"
              className={classes.searchButton}
            >
              Поиск
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default SearchField;
