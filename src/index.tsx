import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import routes from "./sections";

function mount(rootNode: HTMLElement | null): void {
  ReactDOM.render(<BrowserRouter>{routes}</BrowserRouter>, rootNode);
}

mount(document.getElementById("app"));
