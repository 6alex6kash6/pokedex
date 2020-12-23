import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/App";
import { rootReducer } from "./store";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";

import "./styles/index.css";
const mainStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
