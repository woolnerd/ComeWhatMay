import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";
import Scroll from "../util/scroll_to_top_util";

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Scroll />
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
