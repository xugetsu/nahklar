import React from "react";
import { Field } from "formik";

const Fieldset = ({ component = "input", render, name, label, ...rest }) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const error = form.touched[name] && form.errors[name];
      //const classes = error ? "fieldset fieldset--error" : "fieldset";
      return (
        <div>
          <label htmlFor={name}>{label}</label>
          {render
            ? render({ field, form, ...rest }) // render prop inception
            : component
              ? React.createElement(component, {
                  ...field,
                  ...rest,
                  invalid: (!!error).toString()
                })
              : null}
          {error && <div className="field-error">{error}</div>}
        </div>
      );
    }}
  />
);

export default Fieldset;
