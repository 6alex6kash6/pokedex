import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { reducer } from "./store";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const mainStore = configureStore({
  reducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
