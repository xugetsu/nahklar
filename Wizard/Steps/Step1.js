import React from "react";
import TextInput from "../FieldSets/TextInput";

export default props => {
  return (
    <div>
      <h2>
        Start here with the profiling for the person to be gifted ﻿. We
        guarantee the privacy.
      </h2>
      <TextInput
        placeholder="name"
        disabled={false}
        name="name"
        label="Name of the recipient"
      />
      <TextInput name="lastName" label="lastName" />
    </div>
  );
};
