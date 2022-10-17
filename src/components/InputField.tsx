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
import type { SupportedInputs } from 'react-final-form';

import type { InputFieldProps, InputProps, InputFieldReturn, InputReturn } from '../types/Input';

import './InputField.css';

// react-final-form provides an input prop that contains name, onBlur, onChange, onFocus, and value
const Default: InputReturn = ({ label, input }: InputProps) => (
  <div className="input-container">
    {label && <label>{label}</label>}
    <input {...input} />
  </div>
);

const Textarea: InputReturn = ({ label, input }: InputProps) => (
  <div className="input-container">
    {label && <label>{label}</label>}
    <textarea {...input} />
  </div>
);

const InputField: InputFieldReturn = ({ component, name, label, type }: InputFieldProps) => {
  const getComponent = (supportedInput: SupportedInputs) => {
    let component: InputReturn;
    switch (supportedInput) {
      case 'textarea':
        component = Textarea;
        break;
      default:
        component = Default;
        break;
    }
    return component;
  };

  return <Field type={type} component={getComponent(component)} label={label} name={name} />;
};

export default InputField;
