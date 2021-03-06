import React from "react";
import { IDropZoneProps, IDropZoneCallProps } from "./props";
import { useEffect, useState, FunctionComponent } from "react";
import { useDropzone } from "react-dropzone";
import createStyles from "./styles";
import Avatar from "@material-ui/core/Avatar";

const DropZone: FunctionComponent<IDropZoneProps &
  IDropZoneCallProps> = props => {
  const {
    handleDrop,
    initialPicture,
    disabled,
    defaultPictire,
    ...otherProps
  } = props;

  const [files, setFiles] = useState([] as any);

  const classes = createStyles();

  const { getRootProps, getInputProps } = useDropzone({
    disabled,
    accept: "image/*",
    onDrop: acceptedFiles => {
      if (disabled) {
        return;
      }
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
      handleDrop(acceptedFiles[0]);
    }
  });

  useEffect(
    () => () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const getImageUrl = (): string => {
    if (files.length) {
      return files[0].preview;
    }
    if (!files.length && initialPicture) {
      return initialPicture.replace("\\", "\\\\");
    }
    return defaultPictire ? defaultPictire : "images\\\\social_network.jpg";
  };

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <section>
        <aside>
          <div>
            <Avatar
              src={getImageUrl()}
              classes={{
                root: classes.image
              }}
              {...otherProps}
            />
          </div>
        </aside>
      </section>
    </div>
  );
};

export default DropZone;
