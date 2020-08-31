import React, { useState, useContext, useEffect } from "react"
import { LoginButton } from "./LoginButton"
import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../logo.png"
import { SidebarData } from "./SidebarData"
import * as AiIcons from "react-icons/ai"
import { ButtonContainer } from "./Button"
import Dropdown from "./Dropdown"
import { AuthContext } from "../Auth"
import firebase from "../base"

function Navbar() {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const { currentUser } = useContext(AuthContext)

  //const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const db = firebase.firestore()
  const [sidebar, setSidebar] = useState(false)
  const [displayName, setDisplayName] = useState()
  const showSidebar = () => setSidebar(!sidebar)

  useEffect(() => {
    console.log("Page reloaded")
    const fetchData = async () => {
      const email = await localStorage.getItem("email")
      if (email !== null) {
        console.log(email)
        db.collection("user")
          .doc(email)
          .get()
          .then((doc) => {
            const data = doc.data()
            setDisplayName(data.name)
            console.log(data) // LA city object with key-value pair
          })
      }
    }
    fetchData()
  }, [])

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
            <li
              className="sm-nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/services"
                className="sm-nav-links"
                onClick={closeMobileMenu}
              >
                Hello {displayName} <i className="fas fa-caret-down" />
              </Link>
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
