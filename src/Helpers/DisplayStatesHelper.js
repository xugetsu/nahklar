import React from "react";

export default props => {
  const { numberOfSteps, formValues, currentStep } = props.wizard;
  const {
    values,
    touched,
    isSubmitting,
    isValidating,
    submitCount,
    dirty,
    isValid,
    validateOnChange,
    validateOnBlur
  } = props.formik;
  return (
    <div>
    <h2>Development Tools:</h2>
      <div className={"Error Displayer"}>
        <pre>
          <strong>Formik errors</strong> ={" "}
          {JSON.stringify(props.formik.errors, null, 2)}
        </pre>
      </div>
      <div className={"Formik Displayer"}>
        <pre>
          <strong>Formik props</strong> ={" "}
          {JSON.stringify(
            {
              values,
              touched,
              isSubmitting,
              isValidating,
              submitCount,
              dirty,
              isValid,
              validateOnChange,
              validateOnBlur
            },
            null,
            2
          )}
        </pre>
      </div>
      <div className={"Wizard Displayer"}>
        <pre>
          <strong>Wizard state</strong> ={" "}
          {JSON.stringify({ numberOfSteps, formValues, currentStep }, null, 2)}
        </pre>
      </div>
    </div>
  );
};
