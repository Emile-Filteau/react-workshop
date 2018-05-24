import * as React from "react";
import * as ReactDOM from "react-dom";

function mount(rootNode: HTMLElement | null): void {
  ReactDOM.render(
    <h1>Hello from react with typescript</h1>,
    rootNode,
  );
}

mount(document.getElementById('app'));
