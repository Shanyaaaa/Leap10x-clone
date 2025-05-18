import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <App />
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);
