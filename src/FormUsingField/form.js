import React from "react";
import DisplayFormikState from "../Helpers/DisplayFormikState";
import { Form, Field } from "formik";

const F = React.Fragment;

export default props => {
  const inputs = [
    { type: "text", name: "name", label: "Name" },
    { type: "number", name: "age", label: "Age" },
    { type: "email", name: "email", label: "Email" },
    { type: "url", name: "website", label: "Website" },
    { type: "date", name: "createdOn", label: "Created On" }
  ];

  return (
    <Form>
      <h2> " A form using Formik's Fields" </h2>
      {inputs.map(input => (
        <F key={input.name}>
          <label htmlFor={input.name}>{input.label}</label>
          <Field
            key={input.name}
            type={input.type}
            name={input.name}
            // Field will take care of onBlure, onChange & value for you
            className={props.errors[input.name] ? "error" : "normal"}
            placeholder={input.label}
            component="input"
            // render
          />
          {props.errors[input.name] && (
            <div className="input-feedback">{props.errors[input.name]}</div>
          )}
        </F>
      ))}
      <button type="submit">Submit</button>
      <button type="button" onClick={props.handleReset}>
        Reset
      </button>
      <DisplayFormikState {...props} />
    </Form>
  );
};
