export default (values, formikBag) => {
  alert("Submit:\n" + JSON.stringify(values, null, 2));
  formikBag.setSubmitting(false);
  formikBag.resetForm();
};
