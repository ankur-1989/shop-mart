import React, { useState, useContext } from "react"
import { LoginButton } from "./LoginButton"
import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../logo.png"
import { SidebarData } from "./SidebarData"
import * as AiIcons from "react-icons/ai"
import { ButtonContainer } from "./Button"
import Dropdown from "./Dropdown"
import { AuthContext } from "../Auth"

function Navbar() {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const { currentUser } = useContext(AuthContext)

  //const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
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
        </Link>
        <div className="navbar-logo" onClick={showSidebar}>
          <span className="brandNameFirst">Shop</span>
          <span className="brandNameLast">Mart</span>
        </div>

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
      <nav className={sidebar ? "sb-nav-menu active" : "sb-nav-menu"}>
        <ul className="sb-nav-menu-items" onClick={showSidebar}>
          <li className="sb-navbar-toggle">
            <Link to="#" className="sb-menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="sb-span">{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
