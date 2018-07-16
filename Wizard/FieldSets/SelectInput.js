import { Field } from "formik";

// This is identical to TextInput, except we will render a <select> instead.
// If this code seems smelly, it's because it is. Keep reading...

export default ({ name, label, ...rest }) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const error = form.touched[name] && form.errors[name];
      const classes = error ? "fieldset fieldset--error" : "fieldset";
      return (
        <div className={classes}>
          <label htmlFor={name}>{label}</label>
          <select {...field} {...rest} />
          {form.errors[name] &&
            form.touched[name] && (
              <div className="field-error">{form.errors[name]}</div>
            )}
        </div>
      );
    }}
  />
);
