import React, { useState, useCallback, useContext } from "react"
import { withRouter, Redirect } from "react-router"
import app from "../../base"
import { AuthContext } from "../../Auth"

const Login = ({ history }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const { email, password } = user

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        localStorage.setItem("email", email.value)
        await app.auth().signInWithEmailAndPassword(email.value, password.value)
        history.push("/products")
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to="/products" />
  }

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
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

        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
      <p className="registerContainer" onClick={() => history.push("/sign-up")}>
        Not Registered Yet? <strong>Register</strong>
      </p>
    </div>
  )
}

export default withRouter(Login)
