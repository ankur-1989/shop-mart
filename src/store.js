import React, { Component } from "react"
import { storeProducts, detailProduct } from "./data"
import { withRouter } from "react-router-dom"
import { shoes } from "./shoes"
import { clothes } from "./clothes"
const DataContext = React.createContext()

class DataProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  }

  componentDidMount() {
    this.setProducts(storeProducts)
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.location.state !== this.props.location.state &&
      this.props.location.state
    ) {
      this.setProducts()
    }
  }

  setProducts = () => {
    let tempProducts = []
    let data = []
    switch (this.props.location.state) {
      case "mobile":
        data = storeProducts
        break
      case "shoes":
        data = shoes
        break
      case "clothes":
        data = clothes
        break
      default:
        data = storeProducts
    }

    data.forEach((prod) => {
      const singleProd = { ...prod }
      tempProducts = [...tempProducts, singleProd]
    })
    this.setState((prevState) => {
      return { ...prevState, products: tempProducts }
    })
  }

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id)
    return product
  }

  handleDetail = (id) => {
    const product = this.getItem(id)

    this.setState((prevState) => {
      return { ...prevState, detailProduct: product, modalProduct: product }
    })
  }
  addToCart = (id) => {
    const tempProducts = [...this.state.products]

    const index = tempProducts.indexOf(this.getItem(id))
    const product = tempProducts[index]
    product.inCart = true
    product.count = 1
    const price = product.price
    product.total = price
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          products: tempProducts,
          cart: [...this.state.cart, product],
        }
      },
      () => {
        this.addTotals()
      }
    )
  }

  openModal = (id) => {
    const product = this.getItem(id)

    this.setState((prevState) => {
      return { ...prevState, modalProduct: product, modalOpen: true }
    })
  }

  closeModal = () => {
    this.setState((prevState) => {
      return { ...prevState, modalOpen: false }
    })
  }

  increment = (id) => {
    let tempCart = [...this.state.cart]
    let selectedCart = tempCart.find((item) => item.id === id)
    const index = tempCart.indexOf(selectedCart)
    const product = tempCart[index]

    product.count = product.count + 1
    product.total = product.count * product.price

    this.setState(
      (prevState) => {
        return {
          ...prevState,
          cart: [...tempCart],
        }
      },
      () => {
        this.addTotals()
      }
    )
  }

  decrement = (id) => {
    let tempCart = [...this.state.cart]
    let selectedCart = tempCart.find((item) => item.id === id)
    const index = tempCart.indexOf(selectedCart)
    const product = tempCart[index]

    product.count = product.count - 1

    if (product.count === 0) {
      this.removeItem(id)
    } else {
      product.total = product.count * product.price
      this.setState(
        (prevState) => {
          return {
            ...prevState,
            cart: [...tempCart],
          }
        },
        () => {
          this.addTotals()
        }
      )
    }
  }

  removeItem = (id) => {
    let tempProducts = [...this.state.products]
    let tempCart = [...this.state.cart]
    tempCart = tempCart.filter((item) => item.id !== id)
    const index = tempProducts.indexOf(this.getItem(id))
    let removedProduct = tempProducts[index]
    removedProduct.inCart = false
    removedProduct.count = 0
    removedProduct.total = 0
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          cart: [...tempCart],
          products: [...tempProducts],
        }
      },
      () => {
        this.addTotals()
      }
    )
  }

  clearCart = () => {
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          cart: [],
        }
      },
      () => {
        this.setProducts()
        this.addTotals()
      }
    )
  }

  addTotals = () => {
    let subTotal = 0
    this.state.cart.map((item) => (subTotal += item.total))
    const tempTax = subTotal * 0.18
    const tax = parseFloat(tempTax.toFixed(2))
    const total = parseFloat((subTotal + tax).toFixed(2))
    this.setState((prevState) => {
      return {
        ...prevState,
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      }
    })
  }

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          setProducts: this.setProducts,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

const DataConsumer = DataContext.Consumer

export default withRouter(DataProvider)

export { DataContext, DataConsumer }
