import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CardProvider } from "./contexts/cart.context";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CardProvider>
          <App />
        </CardProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
