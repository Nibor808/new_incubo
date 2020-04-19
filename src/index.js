import "jquery/dist/jquery.slim.min";
import "Bootstrap/bootstrap.bundle.min";
import "./styles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

if (process.env.NODE_ENV !== "production")
  // eslint-disable-next-line no-console
  console.log("MODE:", process.env.NODE_ENV);

ReactDOM.render(<App />, document.querySelector("#root"));
