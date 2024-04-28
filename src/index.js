import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Home from "./Home";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Home />
  </React.StrictMode>
);
