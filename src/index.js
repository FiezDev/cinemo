import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux'
import store from './store'
import * as serviceWorker from "./serviceWorker";

import "./tailwind.css";

// Wrap the rendering in a function:
const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
