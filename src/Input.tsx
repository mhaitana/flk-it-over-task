/* *
 * This file contains input components.

 * Instructions: 
 *   - Add number input
 *   - Add date input
 *   - Add multine input
 *   - Do any necessary refactoring
 * */

import { Field } from "react-final-form";
import "./Input.css";

// react-final-form provides an input prop that contains name, onBlur, onChange, onFocus, and value
const textInput = ({ label, input }) => (
  <div className="input-container">
    <label>{label}</label>
    <input type="text" {...input} />
  </div>
);

const TextField = ({ name, label }) => (
  <Field type="text" component={textInput} label={label} name={name} />
);

export { TextField };
