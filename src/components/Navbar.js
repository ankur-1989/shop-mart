import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import logo from "../logo.png"
import { ButtonContainer } from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { AuthContext } from "../Auth"
import app from "../base"

export default function Navbar() {
  const { currentUser } = useContext(AuthContext)
  const history = useHistory()
  const handleLogout = async () => {
    try {
      console.log("calling logout")
      await app.auth().signOut()
      history.push("/login")
    } catch (error) {
      alert(error)
    }
  }
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="logo" className="navbar-brand size" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>

      {currentUser && (
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <FontAwesomeIcon icon="cart-plus" />
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      )}
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-2">
          {!currentUser ? (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          ) : (
            <ButtonContainer onClick={handleLogout}>
              <span className="mr-2">
                <FontAwesomeIcon icon="sign-out-alt" />
              </span>
              Logout
            </ButtonContainer>
          )}
        </li>
      </ul>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`
