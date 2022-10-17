import type { Input } from './types/Input';

export const inputFields: Input[] = [
  {
    component: 'input',
    label: 'Text field',
    name: 'textField',
    type: 'text'
  },
  {
    component: 'input',
    label: 'Number field',
    name: 'numberField',
    type: 'number'
  },
  {
    component: 'input',
    label: 'Date field',
    name: 'dateField',
    type: 'date'
  },
  {
    component: 'textarea',
    label: 'Multiline field',
    name: 'multilineField',
    type: 'text'
  }
];

export const formValues = {
  textField: 'text',
  numberField: '1234',
  dateField: '2022-10-18',
  multilineField: 'multi\nline'
};
