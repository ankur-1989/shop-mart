import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { ButtonContainer } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
export default class Navbar extends Component {
  render() {
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

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <FontAwesomeIcon icon="cart-plus" />
            </span>
            My Cart
          </ButtonContainer>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-2">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item ml-2">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
