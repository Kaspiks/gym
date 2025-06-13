// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

import React from "react"
import { createRoot } from "react-dom/client"

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("react-root")
  if (rootElement) {
    const root = createRoot(rootElement)
    root.render(React.createElement("h1", null, "Hello React!"))
  }
})
