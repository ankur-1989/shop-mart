import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Modal from "./components/Modal";
import Cart from "./components/Cart";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faCartPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faCartPlus, faTrash);

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/details" component={ProductDetails}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
