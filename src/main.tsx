import React from "react";
import ReactDOM from "react-dom";
import "./styles/globalStyle.css";
import App from "./App";
import { worker } from "./mocks/worker";

// 개발 환경일때만 구동
if (process.env.NODE_ENV === "development") {
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
