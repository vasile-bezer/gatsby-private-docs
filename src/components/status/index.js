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
        {`Per accedere ai contenuti è necessario autenticarsi,`}&nbsp;
        <Link to="/app/login">accedi</Link>{`.`}
      </p>
    )
  } else {
    const { name, email } = getCurrentUser()

    details = (
      <p className={status__text}>
        Connesso come {name} ({email}), &nbsp;
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          scollegati
        </a>{`.`}
      </p>
    )
  }

  return (
    <div className={status}>
      {details}
      {isLoggedIn() && <Search indices={searchIndices} />}
    </div>
  )
}

export default Status
