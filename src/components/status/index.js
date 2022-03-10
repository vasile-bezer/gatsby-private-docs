import React from "react"
import Search from "components/search"
import { Link, navigate } from "@reach/router"
import { getCurrentUser, isLoggedIn, logout } from "auth/auth"
import { status, status__text } from "./status.module.css"
const searchIndices = [{ name: `Pages`, title: `Pages` }]
const Status = () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <p className={status__text}>
        Per accedere ai contenuti è necessario essere autenticati
        {`, `}
        <Link to="/app/login">accedi</Link>.
      </p>
    )
  } else {
    const { name, email } = getCurrentUser()

    details = (
      <p className={status__text}>
        Connesso come {name} ({email}
        )!
        {` `}
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          scollegati
        </a>
      </p>
    )
  }

  return (
    <div className={status}>
      {details}
      <Search indices={searchIndices} />
    </div>
  )
}

export default Status
