export interface IActivationFieldProps {
    formName: string;
    getFieldValue: (fieldName: string) => any;
}

export interface IActivationFieldCallProps {
    change: (fieldName: string, value: any) => void;
    unregisterField: (fieldName: string) => void;
}