import React from "react"
import View from "./view"
import { getCurrentUser } from "../auth/auth"

const Profile = () => {
  const { name } = getCurrentUser()

  return (
    <View title="Your Profile">
      <p>Welcome back to your profile, {name}!</p>
      <p>
        This is a client-only route. You could set up a form to save information
        about a user here.
      </p>
    </View>
  )
}

export default Profile
