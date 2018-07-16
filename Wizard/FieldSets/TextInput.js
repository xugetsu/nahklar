import { Field } from "formik";
import React from "react";
import { Input, Form } from "antd";

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};

export default ({ name, label, ...rest }) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const touched = form.touched[name];
      const error = touched && form.errors[name];
      return (
        <FormItem
          {...formItemLayout}
          //label="Fail"
          validateStatus={touched ? (error ? "error" : "success") : ""} //'success', 'warning', 'error', 'validating'.
          hasFeedback
          help={form.errors[name]}
        >
          <label htmlFor={name}>{label}</label>
          <Input {...field} {...rest} />
        </FormItem>
      );
    }}
  />
);
