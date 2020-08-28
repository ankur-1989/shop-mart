import React from "react"
import "./Button.css"
import { Link } from "react-router-dom"

export function LoginButton() {
  return (
    <Link to="login">
      <button className="sm-btn">Login</button>
    </Link>
  )
}
