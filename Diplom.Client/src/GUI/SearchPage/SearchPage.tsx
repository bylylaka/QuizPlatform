import React, { FunctionComponent, useEffect } from "react";
import createStyles from "./styles";
import { ISearchPageProps, ISearchPageCallProps } from "./props";
import Container from "@material-ui/core/Container";
import SearchFieldContainer from "./SearchField/SearchFieldContainer";
import SearchListContainer from "./SearchList/SearchListContainer";

const SearchPage: FunctionComponent<ISearchPageProps & ISearchPageCallProps> = (
  props
) => {
  const { setTitle } = props;

  const classes = createStyles();

  useEffect(() => {
    setTitle("Search");
  }, []);

  return (
    <Container className={classes.paper}>
      <SearchFieldContainer />
      <SearchListContainer />
    </Container>
  );
};

export default SearchPage;
