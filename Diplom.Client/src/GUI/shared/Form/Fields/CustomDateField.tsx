import React from "react";
import TextField, { BaseTextFieldProps } from "@material-ui/core/TextField";
import { WrappedFieldProps } from "redux-form";
import moment from "moment";
import createStyles from "./styles";

export interface IDateFieldProps extends BaseTextFieldProps, WrappedFieldProps {
  customProps?: any;
}

const CustomDateField = (props: IDateFieldProps) => {
  const { meta, error, input, customProps } = props;

  const classNames = createStyles();

  const value = moment(input.value).format("YYYY-MM-DD");

  return (
    <TextField
      {...(props as any)}
      {...input}
      value={value}
      InputProps={{
        classes: {
          disabled: classNames.disabled
        }
      }}
      type="date"
      error={meta.touched && meta.invalid}
      helperText={meta.touched && meta.error}
    />
  );
};

export default CustomDateField;
