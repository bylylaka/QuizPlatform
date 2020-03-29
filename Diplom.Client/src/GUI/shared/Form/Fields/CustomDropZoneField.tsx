import React from "react";
import { BaseTextFieldProps } from "@material-ui/core/TextField";
import { WrappedFieldProps } from "redux-form";
import DropZone from "../../DropZone/DropZone";

export interface ITextFieldProps extends BaseTextFieldProps, WrappedFieldProps {
  customProps?: any;
}

const CustomDropZoneField = (props: ITextFieldProps) => {
  const { meta, error, input, disabled } = props;

  const handleDrop = (file: File) => {
    input.onChange(file);
  };

  return (
    <DropZone
      handleDrop={handleDrop}
      initialPicture={input.value}
      disabled={disabled}
    />
  );
};

export default CustomDropZoneField;
