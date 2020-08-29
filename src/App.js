import React from "react"
import Navbar from "./components/Navbar"
import Modal from "./components/Modal"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from "./components/pages/Home"
import { Switch, Route } from "react-router-dom"
import Orders from "./components/pages/Orders"
import Profile from "./components/pages/Profile"
import ContactUs from "./components/pages/ContactUs"
import ProductList from "./components/pages/ProductList"
import ProductDetails from "./components/pages/ProductDetails"
import Cart from "./components/Cart"
import PrivateRoute from "./PrivateRoute"
import PaidCart from "./components/PaidCart"
import SignUp from "./components/pages/SignUp"
import Login from "./components/pages/Login"

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={ProductList} />
        <PrivateRoute path="/cart" component={Cart}></PrivateRoute>
        <PrivateRoute path="/details" component={ProductDetails}></PrivateRoute>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/contact-us" component={ContactUs}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/orders" component={Orders}></Route>
        <Route path="/paidCart" component={PaidCart}></Route>
      </Switch>
      <Modal />
    </>
  )
}

export default App
