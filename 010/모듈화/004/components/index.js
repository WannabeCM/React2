import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Main from "./Main";

const body = (
  <div>
    <Main />
    <Product item={data} />
  </div>
);

const domContainer = document.querySelector("#root");
ReactDOM.render(body, domContainer);
