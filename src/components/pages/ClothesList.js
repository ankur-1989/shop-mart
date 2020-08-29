import React, { Component } from "react"
import Product from "./Product"
import Title from "../Title"

import { clothes } from "../../clothes"

import { DataConsumer } from "../../store"
import { withRouter } from "react-router-dom"
class ClothesList extends Component {
  state = {
    products: clothes,
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

export default withRouter(ClothesList)
