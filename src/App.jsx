/* This file shows the usages of the input components */
/* Instructions:
*    - Add number, date, and multiline inputs to the existing form
*    - Create an identical form with controlled state
*/
import { Form } from "react-final-form";
import { TextField } from "./Input";
import "./App.css";

function App() {
  return (
    <Form onSubmit={(values) => console.log(values)}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="form">
          <TextField label="Text field" name="textField" />
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  );
}

export default App;
