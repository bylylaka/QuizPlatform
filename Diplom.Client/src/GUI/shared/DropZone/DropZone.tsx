import React from "react";
import { IDropZoneProps, IDropZoneCallProps } from "./props";
import { useEffect, useState, FunctionComponent } from "react";
import { useDropzone } from "react-dropzone";

const DropZone: FunctionComponent<IDropZoneProps &
  IDropZoneCallProps> = props => {
  const { handleDrop, initialPicture } = props;

  const [files, setFiles] = useState([] as any);

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

  const renderContent = (): JSX.Element => {
    if (files.length) {
      return (
        <aside>
          <div>
            <img src={files[0].preview} />
          </div>
        </aside>
      );
    }
    if (!files.length && initialPicture) {
      return (
        <aside>
          <div>
            <img src={initialPicture} />
          </div>
        </aside>
      );
    }
    return <p>Drag 'n' drop some files here, or click to select files</p>;
  };

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <section>{renderContent()}</section>
    </div>
  );
};

export default DropZone;
