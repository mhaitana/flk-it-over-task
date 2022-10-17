import type { SupportedInputs } from 'react-final-form';

export type TInputType = 'text' | 'number' | 'date';

export type TInputField = {
  component: SupportedInputs;
  name: string;
  type: TInputType;
  label?: string;
};
