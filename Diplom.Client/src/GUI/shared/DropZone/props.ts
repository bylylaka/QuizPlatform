export interface IDropZoneProps {
  initialPicture: string;
  disabled?: boolean;
}

export interface IDropZoneCallProps {
  handleDrop: (file: File) => void;
}
