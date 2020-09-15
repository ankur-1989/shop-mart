import React, { useState, useCallback, useEffect } from "react"
import { withRouter } from "react-router"
import firebase from "../../base"

const Profile = ({ history }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  })
  const db = firebase.firestore()
  const { name, address, contact, email } = user

  useEffect(() => {
    const fetchData = async () => {
      const email = await localStorage.getItem("email")
      if (email !== null) {
        db.collection("user")
          .doc(email)
          .get()
          .then((doc) => {
            const data = doc.data()
            setUser({
              name: data.name,
              email: data.email,
              address: data.address,
              contact: data.contact,
            })
          })
      }
    }
    fetchData()
  }, [db])

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      const { name, address, contact, email } = event.target.elements

      try {
        db.collection("user")
          .doc(email.value)
          .set({
            name: name.value,
            address: address.value,
            contact: contact.value,
            email: email.value,
          })
          .then(function () {
            console.log("Document successfully written!")
          })
          .catch(function (error) {
            console.error("Error writing document: ", error)
          })
        history.push("/")
      } catch (error) {
        alert(error)
      }
    },
    [db, history]
  )

  return (
    <div className="form-container">
      <h1>Your Account</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="text"
            name="contact"
            value={contact}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>

        <input
          type="submit"
          value="Save"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  )
}

export default withRouter(Profile)
