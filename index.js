import "./demo.css";
import React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
// import MyFormik from "./src/MyFormik";
// import SignUp from "./src/FormUsingField/CustomInputs/customeInputs";

import Wizard from "./Wizard/Wizard.js";

const App = () => (
  <div className="app">
    <Wizard />
  </div>
);

render(<App />, document.getElementById("root"));
