import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/index";
import thunk from "redux-thunk";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
