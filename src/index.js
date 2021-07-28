// React
import React from "react";
import ReactDOM from "react-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store";
// Rounting
import { BrowserRouter as Router } from "react-router-dom";
// components
import App from "./Components/App/App";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById("root")
);

reportWebVitals();
