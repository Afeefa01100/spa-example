import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App2 from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App2,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
