import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

import App from "./App"
import DataProvider from "./store"
import { BrowserRouter as Router } from "react-router-dom"
import { AuthProvider } from "./Auth"

ReactDOM.render(
  <AuthProvider>
    <DataProvider>
      <Router>
        <App />
      </Router>
    </DataProvider>
  </AuthProvider>,
  document.getElementById("root")
)
