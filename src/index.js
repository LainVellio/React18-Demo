import React from "react";
import ReactDOM18 from "react-dom/client";
import ReactDOM17 from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
window.isControlledInput = true;

window.renderReact18 = () => {
  const root = ReactDOM18.createRoot(container);
  window.root = root;
  window.version = "18";
  window.root.render(<App />);
};

window.unmountReact18 = () => {
  window.root.unmount();
};

window.renderReact17 = () => {
  window.version = "17";
  ReactDOM17.render(<App />, container);
};

window.unmountReact17 = () => {
  ReactDOM17.unmountComponentAtNode(container);
};

window.renderReact18();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
