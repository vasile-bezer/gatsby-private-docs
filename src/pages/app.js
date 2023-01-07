import React from "react"
import { Router } from "@reach/router"
import Layout from "components/layout"
import Profile from "components/profile"
import Details from "components/details"
import Login from "components/login"
import PrivateRoute from "components/private-route"

const App = ({ location, pageContext }) => {
  return (
    <Layout location={location} pageContext={pageContext}>
      <Router>
        <PrivateRoute path="/guacamole/details" component={Details} />
        <PrivateRoute path="/app/details" component={Details} />
        <PrivateRoute path="/app/profile" component={Profile} />
        <Login path="/app/login" />
      </Router>
    </Layout>
  )
}
export default App
