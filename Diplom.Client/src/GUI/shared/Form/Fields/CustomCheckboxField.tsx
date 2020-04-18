import React, { useEffect } from "react";
import TextField, { BaseTextFieldProps } from "@material-ui/core/TextField";
import { WrappedFieldProps } from "redux-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import createStyles from "./styles";

export interface ICheckboxFieldProps
  extends BaseTextFieldProps,
    WrappedFieldProps {
  customProps?: any;
}

const CustomCheckboxField = (props: ICheckboxFieldProps) => {
  const { meta, error, input, label, customProps } = props;

  const classNames = createStyles();

  useEffect(() => {
    if (!meta.initial) {
      input.onChange(false);
    }
  }, []);

  return (
    <FormControlLabel
      classes={{
        disabled: classNames.disabled,
      }}
      control={
        <Checkbox
          {...(props as any)}
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  );
};

export default CustomCheckboxField;
