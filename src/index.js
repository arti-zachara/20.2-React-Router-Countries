import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
// --- inside-app imports -----------------------
import * as serviceWorker from "./serviceWorker";
import store from "./store/index";
import DevTools from "./DevTools";
import { getCountries } from "./actions/actions-countries";

render(
  <Provider store={store}>
    <div>
      <h1>Inicjalizacja projektu</h1>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById("root")
);

store.dispatch(getCountries());

serviceWorker.unregister();
