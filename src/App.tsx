/* This file shows the usages of the input components */
/* Instructions:
 *    - Add number, date, and multiline inputs to the existing form
 *    - Create an identical form with controlled state
 */
import React from 'react';
import { Form } from 'react-final-form';

import { InputField } from './Input';
import type { Input } from './types/Input';

import './App.css';

const inputFields: Input[] = [
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

const formValues = {
  textField: 'text',
  numberField: '1234',
  dateField: '2022-10-18',
  multilineField: 'multi\nline'
};

function App() {
  return (
    <Form initialValues={formValues} onSubmit={(values) => console.log(values)}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="form">
          {inputFields.map((input) => (
            <InputField key={input.name} {...input} />
          ))}
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  );
}

export default App;
