import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init({ duration: 800, once: true });
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
