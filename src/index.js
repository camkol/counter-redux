import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Define the render function
const render = () => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch} />
    </React.StrictMode>
  );
};

// Initial render
render();

// Subscribe to state changes
store.subscribe(render);
