import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { isLoggedIn } from "../auth/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const redirect = !isLoggedIn() && location.pathname !== `/app/login`
  if (redirect) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app/login`)
    return null
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
