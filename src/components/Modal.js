import React, { Component } from "react"
import styled from "styled-components"
import { DataConsumer } from "../store"
import { ButtonContainer } from "./Button"
import { Link, withRouter } from "react-router-dom"

class Modal extends Component {
  render() {
    return (
      <DataConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value
          const { img, title, price } = value.modalProduct
          if (!modalOpen) {
            return null
          } else {
            return (
              <ModalContainer>
                <div id="modal" className="container">
                  <div className="row">
                    <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                      <h5>item added to the cart</h5>
                      <img src={img} alt="Product" className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price: € {price}</h5>
                      <Link
                        to={{
                          pathname: "/products",
                          state: this.props.location.state,
                        }}
                      >
                        <ButtonContainer back onClick={() => closeModal()}>
                          continue shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer onClick={() => closeModal()}>
                          go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            )
          }
        }}
      </DataConsumer>
    )
  }
}

export default withRouter(Modal)

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--mainWhite);
  }
`
