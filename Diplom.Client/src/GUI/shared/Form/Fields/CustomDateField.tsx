import React from "react";
import TextField, { BaseTextFieldProps } from "@material-ui/core/TextField";
import { WrappedFieldProps } from "redux-form";
import moment from "moment";

export interface ITextFieldProps extends BaseTextFieldProps, WrappedFieldProps {
  customProps: object;
}

const CustomDateFoeld = (props: ITextFieldProps) => {
  const { meta, error, input } = props;

  const value = moment(input.value).format("YYYY-MM-DD");

  return (
    <TextField
      {...(props as any)}
      {...input}
      {...props.customProps}
      value={value}
      type="date"
      error={meta.touched && meta.invalid}
      helperText={meta.touched && meta.error}
    />
  );
};

export default CustomDateFoeld;
