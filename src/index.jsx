import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../assets/stylesheets/application.scss";
import App from "./components/app.jsx";

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<App />, root); // root is the HTML element -by ID - we bind the function to root
  // HTML is injected in the DIV id=root
}
