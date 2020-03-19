import React from "react";
import { BaseTextFieldProps } from "@material-ui/core/TextField";
import { WrappedFieldProps } from "redux-form";
import Typography from "@material-ui/core/Typography";

export interface ITextFieldProps extends BaseTextFieldProps, WrappedFieldProps {
  customProps: object;
}

const customErrorMessage = (props: ITextFieldProps) => {
  const { meta } = props;

  return <Typography color="error">{meta.error}</Typography>;
};

export default customErrorMessage;
