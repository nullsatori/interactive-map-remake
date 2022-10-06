import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import "./fonts/Manrope-VariableFont_wght.ttf";

// Корень React приложения
const root = createRoot(document.getElementById("root"));

// Первый рендер (один раз)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
