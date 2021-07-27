// React
import React from "react";
import ReactDOM from "react-dom";

// components
import App from "./Components/App/App";

// Styles
import "reset-css";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
