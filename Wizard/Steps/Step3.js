import React from "react";
import TextInput from "../FieldSets/TextInput";

export default props => {
  return (
    <div>
      <h1>Step {props.step}</h1>
      <TextInput name="email" label="email" />
      <TextInput name="nationality" label="nationality" />
    </div>
  );
};
