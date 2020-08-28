import React from "react"
import "../../App.css"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <div className="home"></div>
      <div className="homeText">
        <h1 className="homeHeader">Welcome to ShopMart</h1>
        <Link to="products">
          <button className="btn">Explore the Products</button>
        </Link>
      </div>
    </>
  )
}
