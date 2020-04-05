export interface IDropZoneProps {
  initialPicture: string;
  defaultPictire?: string;
  disabled?: boolean;
}

export interface IDropZoneCallProps {
  handleDrop: (file: File) => void;
}
