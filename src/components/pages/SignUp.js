import React, { useState, useCallback } from "react"
import { withRouter } from "react-router"
import firebase from "../../base"

const SignUp = ({ history }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    contact: "",
    confirmPassword: "",
  })
  const db = firebase.firestore()
  const { name, address, contact, email, password, confirmPassword } = user

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      const { name, address, contact, email, password } = event.target.elements

      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then((resp) => {
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
          })
        history.push("/")
      } catch (error) {
        alert(error)
      }
    },
    [history, db]
  )

  return (
    <div className="form-container">
      <h1>Register Account</h1>
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
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  )
}

export default withRouter(SignUp)
