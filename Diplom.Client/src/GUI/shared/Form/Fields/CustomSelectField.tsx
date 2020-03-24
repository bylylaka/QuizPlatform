import React from "react";
import { BaseTextFieldProps } from "@material-ui/core/TextField";
import { WrappedFieldProps } from "redux-form";
import { FormControl, InputLabel, Select } from "@material-ui/core";

export interface ITextFieldProps extends BaseTextFieldProps, WrappedFieldProps {
  customProps: object;
}

const customSelectField = (props: ITextFieldProps) => {
  const { meta, error, input, children, label } = props;

  return (
    <FormControl error={meta.touched && error}>
      <InputLabel>{label}</InputLabel>
      <Select native {...input} {...props.customProps}>
        {children}
      </Select>
    </FormControl>
  );
};

export default customSelectField;
