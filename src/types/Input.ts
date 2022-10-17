import type { FieldInputProps, SupportedInputs } from 'react-final-form';

export type InputType = 'text' | 'number' | 'date';

export type Input = {
  component: SupportedInputs;
  name: string;
  type: InputType;
  label?: string;
};

export interface InputProps {
  input: FieldInputProps<any, HTMLElement>;
  label?: string;
}

export interface InputFieldProps extends Input {}

export type InputReturn = ({ label, input }: InputProps) => JSX.Element;
export type InputFieldReturn = ({ component, name, label, type }: InputFieldProps) => JSX.Element;
