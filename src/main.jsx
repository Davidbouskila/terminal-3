import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const bootstrapCSSLink = (
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css"
    integrity="sha384-o3ud9SOf4Ck5foP1ge8PF0tjAL/kz5F5f5b5l5u5QvyO4b4Ck1i4r5u5R4Q1g1g1g1s"
    crossorigin="anonymous"
  />
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
