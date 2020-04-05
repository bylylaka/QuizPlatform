import React from "react";
import { BaseTextFieldProps } from "@material-ui/core/TextField";
import { WrappedFieldProps } from "redux-form";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import createStyles from "./styles";

export interface ICustomSelectProps
  extends BaseTextFieldProps,
    WrappedFieldProps {
  customProps?: any;
}

const customSelectField = (props: ICustomSelectProps) => {
  const { meta, error, input, children, label, disabled } = props;

  const classNames = createStyles();

  return (
    <FormControl
      error={meta.touched && error}
      disabled={disabled}
      {...(props as any)}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        native
        {...input}
        {...props.customProps}
        classes={{
          disabled: classNames.disabled
        }}
      >
        <option value="" />
        {children}
      </Select>
    </FormControl>
  );
};

export default customSelectField;
