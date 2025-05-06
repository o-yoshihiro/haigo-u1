import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // 必要な場合のみ

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
