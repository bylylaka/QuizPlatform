import React, { FunctionComponent, useState } from "react";
import { IAddQuestionProps, IAddQuestionCallProps } from "./props";
import createStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";

export const AddQuestion: FunctionComponent<IAddQuestionProps &
  IAddQuestionCallProps> = props => {
  const { addQuestion } = props;

  const classes = createStyles();

  const [questionName, setQuestionName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionName(event.target.value);
  };

  const handleAdd = () => {
    addQuestion(questionName);
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
          <Grid item xs>
            <TextField
              fullWidth
              value={questionName}
              onChange={handleChange}
              placeholder="Формулировка вопроса"
              InputProps={{
                disableUnderline: true,
                className: classes.searchInput
              }}
            />
          </Grid>
          <Grid item>
            <Button
              onClick={handleAdd}
              variant="contained"
              color="primary"
              className={classes.searchButton}
            >
              Добавить
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AddQuestion;
