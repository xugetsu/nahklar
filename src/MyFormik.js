import React from "react";
import { Formik } from "formik";

import Form from "./BasicForm/form";
import FieldForm from "./FormUsingField/form";
import FieldSetForm from "./FormUsingFieldSet/form";

import initVals from "./initVals";
import reset from "./reset";
import submit from "./submit";
import { validateAsync, validateSync } from "./validate";
import YupSchema from "./YapSchema";

export default props => {
  return (
    <Formik
      $StartExamples
      // Feel free to switch between component examples :
      component={Form}
      //component={Wizard}
      //component={FieldForm}
      //component={FieldSetForm} // Warning: <Formik component> takes precendence over <Formik render> so don’t use both in the same <Formik>
      $EndExamples
      //render={props => <FieldSetForm {...props} />} // (props: FormikProps<Values>) => ReactNode
      //children={props => <Form {...props} />} // children: func
      enableReinitialize={false} // Default is false. Control whether Formik should reset the form if [initialValues] changes (using deep equality).
      isInitialValid={false} // Default is false. Control the initial value of isValid prop prior to mount. You can also pass a function. Useful for situations when you want to enable/disable a submit and reset buttons on initial mount.
      initialValues={initVals} // Initial field values of the form, Formik will make these values available to render methods component as props.values.
      onReset={reset} // Your optional form reset handler. It is passed your forms values and the "FormikBag".
      onSubmit={submit} // Your form submission handler. It is passed your forms values and the "FormikBag",
      validate={validateAsync} // Note: I suggest using validationSchema and Yup for validation. However, validate is a dependency-free, straightforward way to validate your forms.
      validateOnBlur={false} // Default is true. Use this option to run validations on blur events. More specifically, when either handleBlur, setFieldTouched, or setTouched are called.
      validateOnChange={false} // Default is true. Use this option to tell Formik to run validations on change events and change-related methods. More specifically, when either handleChange, setFieldValue, or setValues are called.
      validationSchema={YupSchema} // A Yup schema or a function that returns a Yup schema. This is used for validation. Errors are mapped by key to the inner component's errors. Its keys should match those of values.
    />
  );
};
