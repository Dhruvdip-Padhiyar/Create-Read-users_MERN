import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

//style
import "./index.css";

//component
import App from "./App";

// const element = (
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const refContainer = document.getElementById("root");
const root = createRoot(refContainer);

root.render(<App />);
