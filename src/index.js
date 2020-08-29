import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { AuthProvider } from "./Auth"
import DataProvider from "./store"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <AuthProvider>
    <Router>
      <DataProvider>
        <App />
      </DataProvider>
    </Router>
  </AuthProvider>,
  document.getElementById("root")
)
