import React from "react"
import View from "./view"
import { getCurrentUser } from "../auth/auth"

const Details = () => {
  const { name, legalName, email } = getCurrentUser()

  return (
    <View title="Your Details">
      <p>
        This is a client-only route. You can get additional information about a
        user on the client from this page.
      </p>
      <ul>
        <li>Preferred name: {name}</li>
        <li>Legal name: {legalName}</li>
        <li>Email address: {email}</li>
      </ul>
    </View>
  )
}

export default Details
