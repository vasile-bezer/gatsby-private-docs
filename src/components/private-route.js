import React from "react"
import PropTypes from "prop-types"
import { navigate } from "@reach/router"
import { isLoggedIn, isBrowser } from "auth/auth"

const PrivateRoute = ({ component: Component, location, body, ...rest }) => {
  const redirect = !isLoggedIn() && location.pathname !== `/app/login`
  const loginPath = "/app/login"
  if (redirect) {
    // If we’re not logged in, redirect to the home page.
    // window.navigate() needs to run in a browser and can't be server side rendered
    if (isBrowser) navigate(loginPath)
    return null
  }

  return <Component {...rest}>{body}</Component>
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute

/*
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { isLoggedIn, isBrowser } from "auth/auth"

const PrivateRoute = ({ component: Component, location, body, ...rest }) => {
  const [render, setRender] = useState(false)
  useEffect(() => {
    /*
     * const data = await fetch('https://localhost:1111/api/posts', {
     *  credentials: 'include'
     * });
     * const response = await data.json();

    const redirect = !isLoggedIn() && location.pathname !== `/app/login`
    setRender(redirect)
  }, [])

  //const redirect = !isLoggedIn() && location.pathname !== `/app/login`
  const loginPath = "/app/login"
  if (!render) {
    // If we’re not logged in, redirect to the home page.
    // window.navigate() needs to run in a browser and can't be server side rendered
    if (isBrowser) navigate(loginPath)
    return null
  }

  return render && <Component {...rest}>{body}</Component>
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute

*/
