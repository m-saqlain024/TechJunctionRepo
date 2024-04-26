import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createOvermind } from "overmind";
import { config } from "./overmind";
import { Provider } from "overmind-react";

const overmind = createOvermind(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <App />
    </Provider>
  </React.StrictMode>
);
