import React from "react";
import ReactDOM from "react-dom";

//style
import "./index.css";

//component
import App from "./App";

const element = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const refContainer = document.getElementById("root");

ReactDOM.render(element, refContainer);
