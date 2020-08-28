import React, { useState, useContext } from "react"
import { LoginButton } from "./LoginButton"
import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../logo.png"
import { ButtonContainer } from "./Button"
import Dropdown from "./Dropdown"
import { AuthContext } from "../Auth"

function Navbar() {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const { currentUser } = useContext(AuthContext)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
      console.log(currentUser)
    } else {
      console.log(currentUser)
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <>
      <nav className="sm-navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="logo" className="navbar-brand size" />
          <span className="brandNameFirst">Shop</span>
          <span className="brandNameLast">Mart</span>
        </Link>

        <ul className={click ? "sm-nav-menu active" : "sm-nav-menu"}>
          {currentUser && (
            <li className="sm-nav-item">
              <ButtonContainer
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="sm-nav-links"
                back
                onClick={closeMobileMenu}
              >
                Services <i className="fas fa-caret-down" />
              </ButtonContainer>
              {dropdown && <Dropdown />}
            </li>
          )}
        </ul>
        {!currentUser ? (
          <LoginButton />
        ) : (
          <Link to="/cart" className="ml-auto mr-2">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              My Cart
            </ButtonContainer>
          </Link>
        )}
      </nav>
    </>
  )
}

export default Navbar
