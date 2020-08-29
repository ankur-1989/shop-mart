import React, { useState } from "react"
import { MenuItems } from "./MenuItems"
import "./Dropdown.css"
import app from "../base"
import { Link, useHistory } from "react-router-dom"

function Dropdown({ onMouseLeave }) {
  const [click, setClick] = useState(false)
  const history = useHistory()
  const handleClick = () => setClick(!click)

  const handleLogout = async () => {
    try {
      setClick(false)

      await app.auth().signOut()
      history.push("/login")
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "sm-dropdown-menu clicked" : "sm-dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
                onMouseDown={onMouseLeave}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
        <li>
          <Link className="sm-dropdown-link" to="login" onClick={handleLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Dropdown
