import React, { Component } from "react";
import { Formik, Form } from "formik";
import DisplayStates from "./Helpers/DisplayStates";
import { setLocale } from 'yup/lib/customLocale';
import { Button } from "antd";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";

import * as yup from "yup";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

setLocale({
  mixed: {
    default: 'Não é válido',
  },
  number: {
    integer: 'age must be a number',
  },
})

class Wizard extends Component {
  state = {
    numberOfSteps: 3,
    formValues: {
      name: "",
      lastName: "",
      gender: "",
      age: "",
      email: "",
      nationality: ""
    },
    currentStep: 1,
    pages: {
      1: {
        fields: ["name", "lastName"],
        yupObject: yup.object({
          name: yup.string().required(),
          lastName: yup.string().required()
        })
      },
      2: {
        fields: ["gender", "age"],
        yupObject: yup.object({
          age: yup
            .number()
            .required()
            .positive()
            .integer(),
          email: yup.string().email()
        })
      },
      3: {
        fields: ["email", "nationality"],
        yupObject: yup.object({
          gender: yup.string().default(() => "Male"),
          nationality: yup.string().required()
        })
      }
    }
  };

  finalSubmit = (values, bag) => {
    sleep(1000) // Asynchronous operations
      .then(() => {
        alert(JSON.stringify(values, null, 2));
        bag.setStatus("submitted");
        bag.setSubmitting(false);
      });
  };

  submit = (values, bag) => {
    const { currentStep } = this.state;
    if (currentStep === this.state.numberOfSteps) {
      return this.finalSubmit(values, bag);
    } else {
      this.next(values);
      bag.setSubmitting(false);
      bag.setTouched({
        name: false,
        lastName: false,
        gender: false,
        age: false,
        email: false,
        nationality: false
      });
    }
  };

  next = formValues => {
    this.setState(state => ({
      currentStep: state.currentStep + 1,
      formValues
    }));
  };

  prev = () =>
    this.setState(state => ({
      currentStep: state.currentStep - 1
    }));

  render() {
    const { formValues, currentStep, pages, numberOfSteps } = this.state;

    return (
      <Formik
        initialValues={formValues}
        onSubmit={this.submit} // will be passed values and formikbag
        validateOnBlur
        validateOnChange
        validationSchema={pages[currentStep].yupObject}
        render={props => (
          //<Form> is equivalent to <form onsubmit={props.handleSubmit>}
          <Form>
            {currentStep === 1 && (
              <Step1 step={currentStep} name={props.name} />
            )}
            {currentStep === 2 && (
              <Step2 step={currentStep} name={props.name} />
            )}
            {currentStep === numberOfSteps && (
              <Step3 step={currentStep} name={props.name} />
            )}

            {currentStep > 1 && (
              <Button htmlType="button" type="primary" onClick={this.prev}>
                Prev
              </Button>
            )}
            {currentStep < numberOfSteps && (
              <Button htmlType="submit" type="primary">
                Next
              </Button>
            )}
            {currentStep === numberOfSteps && (
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            )}
            <br />
            <DisplayStates formik={props} wizard={this.state} />
          </Form>
        )}
      />
    );
  }
}

export default Wizard;
