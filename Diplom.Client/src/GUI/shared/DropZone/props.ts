export interface IDropZoneProps {
  initialPicture: string;
}

export interface IDropZoneCallProps {
  handleDrop: (file: File) => void;
}
