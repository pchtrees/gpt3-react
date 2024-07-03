import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root
const root = ReactDOM.createRoot(rootElement);

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
