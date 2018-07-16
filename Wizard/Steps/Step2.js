import React from "react";
import TextInput from "../FieldSets/TextInput";

export default props => {
  return (
    <div>
      <h1>Step {props.step}</h1>
      <TextInput name="gender" label="gender" />
      <TextInput name="age" label="age" />
    </div>
  );
};
