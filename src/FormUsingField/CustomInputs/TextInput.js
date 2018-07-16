import {Field} from "formik";

export default ({ name, label, ...rest }) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const error = form.touched[name] && form.errors[name];
      const classes = error ? "fieldset fieldset--error" : "fieldset";
      return (
        <div className={classes}>
          <label htmlFor={name}>{label}</label>
          <input {...field} {...rest} />
          {form.errors[name] &&
            form.touched[name] && (
              <div className="field-error">{form.errors[name]}</div>
            )}
        </div>
      );
    }}
  />
);