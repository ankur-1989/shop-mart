import React, { useEffect, useState } from "react"
import Title from "../Title"
import CartColumns from "../CartColumns"
import EmptyCart from "../EmptyCart"
import OrderItem from "../OrderItem"
import firebase from "../../base"
import OrderColumns from "../OrderColumns"
const Orders = () => {
  const [ordersHistory, setOrdersHistory] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const email = await localStorage.getItem("email")
      const orderRef = db.collection("orders")
      orderRef
        .where("email", "==", email)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots

            setOrdersHistory((prevOrders) => [...prevOrders, doc.data()])
          })
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error)
        })
    }

    fetchData()
  }, [])

  return (
    <section>
      {ordersHistory.length > 0 ? (
        <React.Fragment>
          <Title name="Your" title="Orders" />
          <OrderColumns />
          <div className="conainer-fluid">
            {ordersHistory.map((item) => {
              return <OrderItem key={item.date} item={item} />
            })}
          </div>
        </React.Fragment>
      ) : (
        <EmptyCart title="Your have not ordered anything" />
      )}
    </section>
  )
}

export default Orders
