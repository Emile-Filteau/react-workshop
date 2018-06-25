import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Index from "./sections";

function mount(rootNode: HTMLElement | null): void {
  ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={Index} />
    </BrowserRouter>,
    rootNode
  );
}

mount(document.getElementById("app"));
