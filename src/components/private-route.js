import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { isLoggedIn } from "auth/auth"

const PrivateRoute = ({ component: Component, location, body, ...rest }) => {
  const redirect = !isLoggedIn() && location.pathname !== `/app/login`
  const loginPath = "/app/login"
  if (redirect) {
    // If we’re not logged in, redirect to the home page.
    navigate(loginPath)
    return null
  }

  return <Component {...rest}>{body}</Component>
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
