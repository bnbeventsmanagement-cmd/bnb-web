import './index.css';
import React from "react";
import { render } from "react-dom";
import { App } from "./App";

// Initialize axe-core for accessibility testing in development
if (process.env.NODE_ENV !== 'production') {
  import('@axe-core/react').then((axe) => {
    axe.default(React, render, 1000);
  });
}

render(<App />, document.getElementById("root"));