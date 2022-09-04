import React from "react";
import { createRoot } from "react-dom/client";

import App from "./app/App";

import { Provider } from "react-redux";
import { store } from "./store/store";

import "./styles/reboot.scss";
import "./styles/general.scss";
import "./styles/media.scss";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
