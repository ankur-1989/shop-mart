import React from "react"

export default function OrderItem({ item }) {
  const { name, price, quantity } = item

  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Name: </span> {name}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: </span> {price}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Quantity: </span> {quantity}
      </div>
    </div>
  )
}
