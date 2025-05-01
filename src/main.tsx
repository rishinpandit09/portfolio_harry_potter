import "./styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({ duration: 800, once: true });
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
