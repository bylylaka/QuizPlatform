import React from "react";
import { IDropZoneProps, IDropZoneCallProps } from "./props";
import { useEffect, useState, FunctionComponent } from "react";
import { useDropzone } from "react-dropzone";
import createStyles from "./styles";
import Avatar from "@material-ui/core/Avatar";

const DropZone: FunctionComponent<IDropZoneProps &
  IDropZoneCallProps> = props => {
  const { handleDrop, initialPicture } = props;

  const [files, setFiles] = useState([] as any);

  const classes = createStyles();

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
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
    return "images\\\\social_network.jpg";
  };

  console.log(getImageUrl());

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <section>
        <aside>
          <div>
            <Avatar src={getImageUrl()} className={classes.image} />
          </div>
        </aside>
      </section>
    </div>
  );
};

export default DropZone;
