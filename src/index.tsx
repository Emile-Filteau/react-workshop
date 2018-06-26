import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import createStore from "store";
import routes from "./sections";

const store = createStore({ initialState: {} });

function mount(rootNode: HTMLElement | null): void {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>{routes}</BrowserRouter>
    </Provider>,
    rootNode
  );
}

mount(document.getElementById("app"));
