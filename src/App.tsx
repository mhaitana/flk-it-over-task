/* This file shows the usages of the input components */
/* Instructions:
 *    - Add number, date, and multiline inputs to the existing form
 *    - Create an identical form with controlled state
 */
import React from 'react';
import { Form } from 'react-final-form';

import InputField from './components/InputField';
import { formValues, inputFields } from './constants';

import './App.css';

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
