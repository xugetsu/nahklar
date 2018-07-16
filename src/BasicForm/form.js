import React from "react";
import DisplayFormikState from "../Helpers/DisplayFormikState";

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
    <form onSubmit={props.handleSubmit}>
      <h2> A from using the Basics </h2>
      {inputs.map(input => (
        <F key={input.name}>
          <label htmlFor={input.name}>{input.label}</label>
          <input
            className={props.errors[input.name] ? "error" : "normal"}
            placeholder={input.label}
            key={input.name}
            type={input.type}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values[input.name]}
            name={input.name}
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
    </form>
  );
};
