import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, hashHistory } from "react-router";
// --- inside-app imports -----------------------
import * as serviceWorker from "./serviceWorker";
import store from "./store/index";
import DevTools from "./DevTools";
import { getCountries } from "./actions/actions-countries";

render(
  <Provider store={store}>
    <div>
      <Router history={hashHistory} routes={routes} />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById("root")
);

store.dispatch(getCountries());

serviceWorker.unregister();
