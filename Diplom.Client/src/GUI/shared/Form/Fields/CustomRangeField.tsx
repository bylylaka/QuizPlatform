import React, { useEffect } from "react";
import TextField, { BaseTextFieldProps } from "@material-ui/core/TextField";
import { WrappedFieldProps } from "redux-form";
import createStyles from "./styles";
import Slider from "@material-ui/core/Slider";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";

export interface ITextFieldProps extends BaseTextFieldProps, WrappedFieldProps {
  customProps?: any;
}

const CustomRangeField = (props: ITextFieldProps) => {
  const { meta, error, input, customProps, disabled, label } = props;

  const classes = createStyles();

  const valuetext = (value: number) => {
    return `${value}°C`;
  };

  const handleChange = (event: any, newValue: number[]) => {
    input.onChange(newValue);
  };

  useEffect(() => {
    if (!meta.initial) {
      input.onChange([0, 100]);
    }
  }, []);

  return (
    <Grid item className={classes.slider}>
      <InputLabel>{label}</InputLabel>
      <Slider
        value={input.value}
        onChange={handleChange as any}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </Grid>
  );
};

export default CustomRangeField;
