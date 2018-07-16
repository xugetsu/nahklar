import React from "react";
import DisplayFormikState from "../Helpers/DisplayFormikState";
import { Form, Field } from "formik";
import FieldSet from "./FieldSet";

export default props => {
  const inputs = [
    { type: "text", name: "name", label: "Name" },
    { type: "number", name: "age", label: "Age" },
    { type: "email", name: "email", label: "Email" },
    { type: "url", name: "website", label: "Website" },
    { type: "date", name: "createdOn", label: "Created On" }
  ];
  return (
    // FieldSet has a built in label and error displayer element
    <Form>
      <h2> " A form using custom Fields" </h2>
      {inputs.map(input => (
        <FieldSet
          label={input.label}
          className={props.errors[input.name] ? "error" : "normal"}
          placeholder={input.label}
          key={input.name}
          type={input.type}
          name={input.name}
        />
      ))}
      <button type="submit">Submit</button>
      <button type="button" onClick={props.handleReset}>
        Reset
      </button>
      <DisplayFormikState {...props} />
    </Form>
  );
};
