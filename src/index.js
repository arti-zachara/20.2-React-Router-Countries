import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";

render(<h1>Inicjalizacja projektu</h1>, document.getElementById("root"));

serviceWorker.unregister();
