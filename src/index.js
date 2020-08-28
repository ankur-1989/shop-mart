import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { AuthProvider } from "./Auth"
import DataProvider from "./store"

ReactDOM.render(
  <AuthProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </AuthProvider>,
  document.getElementById("root")
)
