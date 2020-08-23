import React from "react"

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import ProductDetails from "./components/ProductDetails"
import Modal from "./components/Modal"
import Cart from "./components/Cart"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import { library } from "@fortawesome/fontawesome-svg-core"
import PrivateRoute from "./PrivateRoute"
import {
  faCartPlus,
  faTrash,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons"
import PaidCart from "./components/PaidCart"
library.add(faCartPlus, faTrash, faSignOutAlt)

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <PrivateRoute path="/cart" component={Cart}></PrivateRoute>
        <PrivateRoute path="/details" component={ProductDetails}></PrivateRoute>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/paidCart" component={PaidCart}></Route>
      </Switch>
      <Modal />
    </React.Fragment>
  )
}

export default App
