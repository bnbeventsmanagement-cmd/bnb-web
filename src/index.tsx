import './index.css';
import React from "react";
import { render } from "react-dom";
import { App } from "./App";

// Initialize axe-core for accessibility testing in development
if (import.meta.env.VITE_ENABLE_AXE === 'true' || import.meta.env.DEV) {
  import('@axe-core/react').then((axe) => {
    axe.default(React, render, 1000);
  });
}

render(<App />, document.getElementById("root"));