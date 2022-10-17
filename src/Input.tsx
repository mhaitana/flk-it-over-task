/* *
 * This file contains input components.

 * Instructions: 
 *   - Add number input
 *   - Add date input
 *   - Add multiline input
 *   - Do any necessary refactoring
 * */

import React from 'react';
import { Field } from 'react-final-form';
import type { FieldInputProps, SupportedInputs } from 'react-final-form';

import type { TInputType } from './types/Input';

import './Input.css';

interface InputProps {
  input: FieldInputProps<any, HTMLElement>;
  label?: string;
}

interface InputFieldProps {
  component: SupportedInputs;
  name: string;
  type: TInputType;
  label?: string;
}

// react-final-form provides an input prop that contains name, onBlur, onChange, onFocus, and value
const Default = ({ label, input }: InputProps) => (
  <div className="input-container">
    {label && <label>{label}</label>}
    <input {...input} />
  </div>
);

const Multiline = ({ label, input }: InputProps) => (
  <div className="input-container">
    {label && <label>{label}</label>}
    <textarea {...input} />
  </div>
);

const InputField = ({ component, name, label, type }: InputFieldProps) => (
  <Field
    type={type}
    component={component === 'input' ? Default : Multiline}
    label={label}
    name={name}
  />
);

export { InputField };
