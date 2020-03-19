import React, { FunctionComponent } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const NotFountPage: FunctionComponent = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <Typography variant="h1">404</Typography>
      <Typography>Извините, страница не найдена</Typography>
    </Grid>
  );
};

export default NotFountPage;
