import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import Router from "./routes";
import store from "./store";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div className="app">
        <Router />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
