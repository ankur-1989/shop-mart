import React, { Component } from "react"
import Product from "./Product"
import Title from "../Title"

import { storeProducts } from "../../data"

import { DataConsumer } from "../../store"
import { withRouter } from "react-router-dom"
class ShoesList extends Component {
  state = {
    products: storeProducts,
  }

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <DataConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />
                  })
                }}
              </DataConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(ShoesList)
