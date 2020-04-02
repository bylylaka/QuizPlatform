import React, { FunctionComponent, useState } from "react";
import { IAddQuestionProps, IAddQuestionCallProps } from "./props";
import createStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export const AddQuestion: FunctionComponent<IAddQuestionProps &
  IAddQuestionCallProps> = props => {
  const { fields, title } = props;

  const classes = createStyles();

  const handleAdd = () => {
    fields.push();
  };

  return (
    <Grid container justify="center">
      <Button onClick={handleAdd} variant="contained" color="primary">
        {title}
      </Button>
    </Grid>
  );
};

export default AddQuestion;
