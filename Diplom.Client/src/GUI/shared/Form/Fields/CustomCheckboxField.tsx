import React from "react";
import TextField, { BaseTextFieldProps } from "@material-ui/core/TextField";
import { WrappedFieldProps } from "redux-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export interface ICheckboxFieldProps
  extends BaseTextFieldProps,
    WrappedFieldProps {
  customProps: object;
}

const CustomCheckboxField = (props: ICheckboxFieldProps) => {
  const { meta, error, input, label } = props;

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  );
};

export default CustomCheckboxField;
