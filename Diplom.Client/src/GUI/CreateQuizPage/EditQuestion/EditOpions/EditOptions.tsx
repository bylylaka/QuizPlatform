import React from "react";
import createStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import { Field } from "redux-form";
import customTextField from "../../../shared/Form/Fields/CustomTextField";
import AddQuestion from "../../AddQuestion/AddQuestion";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const EditOptions = (params: any) => {
  const classes = createStyles();

  return (
    <span className={classes.optionsPart}>
      <AddQuestion fields={params["fields"]} title="Добавить опцию" />

      <Grid container>
        {(params["fields"] as []).length > 0 && (
          <Grid className={classes.padding}>
            {(params["fields"] as []).map((field: string, index: number) => {
              const removeOption = () => {
                (params["fields"] as any).remove(index);
              };
              return (
                <Grid container alignItems="center" key={index}>
                  <Grid
                    container
                    spacing={3}
                    key={index}
                    className={classes.option}
                  >
                    <Grid item sm={9}>
                      <Field
                        required
                        name={`${field}.title`}
                        label="Формулировка ответа"
                        fullWidth
                        component={customTextField}
                      />
                    </Grid>
                  </Grid>
                  <IconButton
                    className={classes.removeIcon}
                    onClick={removeOption}
                  >
                    <DeleteIcon color="secondary" />
                  </IconButton>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Grid>
    </span>
  );
};

export default EditOptions;
