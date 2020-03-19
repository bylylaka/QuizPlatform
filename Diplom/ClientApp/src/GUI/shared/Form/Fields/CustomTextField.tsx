import React from "react";
import TextField, { BaseTextFieldProps } from "@material-ui/core/TextField";
import { WrappedFieldProps } from "redux-form";

export interface ITextFieldProps extends BaseTextFieldProps, WrappedFieldProps {
  customProps: object;
}

const customTextField = (props: ITextFieldProps) => {
  const { meta, error, input } = props;

  return (
    <TextField
      {...(props as any)}
      error={meta.touched && meta.invalid}
      helperText={meta.touched && meta.error}
      {...props.customProps}
      {...input}
    />
  );
};

export default customTextField;
