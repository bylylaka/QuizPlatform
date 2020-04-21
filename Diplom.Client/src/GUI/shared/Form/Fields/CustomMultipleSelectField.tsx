import React, { useEffect } from "react";
import TextField, { BaseTextFieldProps } from "@material-ui/core/TextField";
import { WrappedFieldProps } from "redux-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import createStyles from "./styles";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export interface ICheckboxFieldProps
  extends BaseTextFieldProps,
    WrappedFieldProps {
  customProps?: any;
}

const CustomMultipleSelectField = (props: ICheckboxFieldProps) => {
  const { meta, error, input, label, customProps, children } = props;

  const classes = createStyles();

  return (
    <Grid
      className={classes.multipleSelectMargin}
    >
      <Typography>{label}</Typography>
      <Grid
        container
        direction="column"
        className={classes.multipleSelectRoot}
        {...(customProps && customProps.container)}
      >
        <FormControlLabel
          control={
            <Grid direction="column">
              {(children as JSX.Element[]).map((option: JSX.Element) => (
                <Grid key={option.props.value}>
                  <Checkbox
                    {...(props as any)}
                    name={`${props.name}[${option.props.value}]`}
                    defaultChecked={
                      input.value.indexOf(option.props.value) !== -1
                    }
                    onChange={(e, checked) => {
                      let newValue = [...input.value];
                      if (checked) {
                        newValue.push(option.props.value);
                      } else {
                        newValue.splice(
                          newValue.indexOf(option.props.value),
                          1
                        );
                      }
                      return input.onChange(newValue);
                    }}
                  />
                  <InputLabel className={classes.displayContents}>
                    {option.props.children}
                  </InputLabel>
                </Grid>
              ))}
            </Grid>
          }
          label=""
        />
      </Grid>
    </Grid>
  );
};

export default CustomMultipleSelectField;
