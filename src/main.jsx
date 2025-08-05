import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

// Remove loading fallback when React loads
document.body.classList.add("app-loaded")

const container = document.getElementById("root")
if (!container) {
  throw new Error("Root element not found")
}

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
