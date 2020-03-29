import React from "react";
import TextField, { BaseTextFieldProps } from "@material-ui/core/TextField";
import { WrappedFieldProps } from "redux-form";
import createStyles from "./styles";

export interface ITextFieldProps extends BaseTextFieldProps, WrappedFieldProps {
  customProps?: any;
}

const customTextField = (props: ITextFieldProps) => {
  const { meta, error, input, customProps } = props;

  const classNames = createStyles();

  return (
    <TextField
      {...(props as any)}
      error={meta.touched && meta.invalid}
      helperText={meta.touched && meta.error}
      {...input}
      InputProps={{
        classes: {
          disabled: classNames.disabled
        }
      }}
    />
  );
};

export default customTextField;
