import React, { FunctionComponent, useEffect, useState } from "react";
import createStyles from "./styles";
import { ISearchPageProps, ISearchPageCallProps } from "./props";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@material-ui/core/Container";

const SearchPage: FunctionComponent<ISearchPageProps &
  ISearchPageCallProps> = props => {
  const { setTitle, search, users } = props;

  const classes = createStyles();

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setTitle("Поиск");
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    search(searchValue);
  };

  return (
    <Container className={classes.paper}>
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
      <Paper className={classes.paper}>
        <div className={classes.contentWrapper}>
          <Typography color="textSecondary" align="center">
            Введите ключевое слово для поиска
          </Typography>
        </div>
      </Paper>
    </Container>
  );
};

export default SearchPage;
