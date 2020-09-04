import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import store from "./ReduxHandling/store/store";
import "./Styles/index.css";
import App from "./App";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <App />
    </Fragment>
  </Provider>,
  document.getElementById("root")
);
