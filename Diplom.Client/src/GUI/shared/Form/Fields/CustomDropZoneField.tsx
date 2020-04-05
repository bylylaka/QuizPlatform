import React from "react";
import { BaseTextFieldProps } from "@material-ui/core/TextField";
import { WrappedFieldProps } from "redux-form";
import DropZone from "../../DropZone/DropZone";

export interface ITextFieldProps extends BaseTextFieldProps, WrappedFieldProps {
  customProps?: any;
  defaultPictire?: string;
}

const CustomDropZoneField = (props: ITextFieldProps) => {
  const { meta, error, input, disabled, defaultPictire } = props;

  const handleDrop = (file: File) => {
    input.onChange(file);
  };

  return (
    <DropZone
      {...(props as any)}
      defaultPictire={defaultPictire}
      handleDrop={handleDrop}
      initialPicture={input.value}
      disabled={disabled}
    />
  );
};

export default CustomDropZoneField;
