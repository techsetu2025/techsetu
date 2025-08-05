import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

// Remove loading fallback when React loads
document.body.classList.add("app-loaded")

createRoot(document.getElementById("root")).render(<App />)
